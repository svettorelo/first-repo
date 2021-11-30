import {Brick} from "~/sprites/Brick";
import {BRICK_IMAGES,LEVEL,STAGE_COLS,STAGE_PADDING,
        BRICK_WIDTH,BRICK_HEIGHT,BRICK_ENERGY,BRICK_PADDING } from "~/setup";

export function createBricks():Brick[]{
    return LEVEL.reduce((acc,elem,index) => {
        const row = Math.floor((index+1)/STAGE_COLS);
        const col = index%STAGE_COLS;
        const x = STAGE_PADDING + col*(BRICK_PADDING+BRICK_WIDTH);
        const y = STAGE_PADDING + row*(BRICK_PADDING+BRICK_HEIGHT);
        if(elem===0) return acc;
        return [...acc,new Brick(BRICK_WIDTH,BRICK_HEIGHT,{x,y},
            BRICK_ENERGY[elem],BRICK_IMAGES[elem])]
    },[] as Brick[]);
}
