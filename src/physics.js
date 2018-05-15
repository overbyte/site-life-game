const MOVE_FORCE = 4;
const MAX_SPEED = 4;
const FRICTION = 0.8;
const GRAVITY = 2;

export function handleInput(player, input) {
    const add = (lhs, rhs, max) => {
        return max > 0
            ? Math.min(max, lhs + rhs)
            : Math.max(max, lhs + rhs);
    };

    player.vel.x *= FRICTION;
    player.vel.y *= FRICTION;


    if(input.right) {
        player.vel.x = add(player.vel.x, MOVE_FORCE, MAX_SPEED);
    } else if (input.left) {
        player.vel.x = add(player.vel.x, -MOVE_FORCE, -MAX_SPEED);
    }

    if(input.a && player.grounded) {
        // do jump
        player.vel.y = -10;
    } else {
        // apply gravity
        player.vel.y = add(player.vel.y, GRAVITY, MAX_SPEED);
    }
}

/**
 *  Compute next position, test world collisions, apply velocity.
 *
 *  @param {Array} world - list of colliders
 *  @param {Rect} collider - list of colliders
 */
export function move(world, collider) {
    const xMin = collider.pos.x + collider.vel.x;
    const yMin = collider.pos.y + collider.vel.y;

    const xMax = xMin + collider.dim.w;
    const yMax = yMin + collider.dim.h;

    const halfW = collider.dim.w * 0.5;
    const halfH = collider.dim.h * 0.5;

    const xOrigin = xMin + halfW;
    const yOrigin = yMin + halfH;

    const intersect = (other) => {
        const otherXMax = other.x + other.w;
        const otherYMax = other.y + other.h;
        const d1x = other.x - xMax; // does other appear right of this
        const d1y = other.y - yMax; // does other appear beneath this
        const d2x = xMin - otherXMax; // does other appear to the left of this
        const d2y = yMin - otherYMax;

        if (d1x > 0 || d1y > 0) {
            return false;
        }

        if (d2x > 0 || d2y > 0) {
            return false;
        }
        
        const otherHalfW = other.w * 0.5;
        const otherHalfH = other.w * 0.5;
        const otherXOrigin = other.x + otherHalfW;
        const otherYOrigin = other.y + otherHalfH;
        const px = otherHalfW + halfW - (xOrigin - otherXOrigin)
        const py = otherHalfH + halfH - (yOrigin - otherYOrigin)

        // return the intersection vector
        return {
            x: px,
            y: py,
            other
        };
    }

    const project = (fixed, dynamic) => {
        
    };

    // TODO: replace this brute for with a sweep & prune broadphase
    // S&R on the y axis as there will be the least potential collisions
    // here
    for(const obj of world) {
        if(intersect(obj)) {
            console.log('hit');
        }
    }

    collider.pos.x = xMin;
    collider.pos.y = yMin;
}
