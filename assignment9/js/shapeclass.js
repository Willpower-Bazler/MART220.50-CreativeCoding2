//shapeclass
class shapeclass {

    //parameters
    constructor(shapetype, param1, param2, param3, param4, param5, translateX, translateY,
        rotateXvalue, rotateYvalue, rotateZvalue, textureValue) {
        this.shapetype = shapetype;
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.param4 = param4;
        this.param5 = param5;
        this.translateX = translateX;
        this.translateY = translateY;
        this.rotateXvalue = rotateXvalue;
        this.rotateYvalue = rotateYvalue;
        this.rotateZvalue = rotateZvalue;
        this.textureValue = textureValue;
    }

    //objects
    draw(fCount) {

        push();
        translate(this.translateX, this.translateY);
        rotateX(this.rotateXvalue * fCount);
        rotateY(this.rotateYvalue * fCount);
        rotateZ(this.rotateZvalue)
        texture(this.textureValue);

        if (this.shapetype == "box") {
            box(this.param1, this.param2, this.param3);
        }

        else if (this.shapetype == "cylinder") {
            cylinder(this.param1, this.param2);
        }

        else if (this.shapetype == "torus") {
            torus(this.param1, this.param2, this.param3, this.param4, );
        }

        else if (this.shapetype == "sphere") {
            sphere(this.param1);
        }

        else if (this.shapetype == "ellipsoid") {
            ellipsoid(this.param1, this.param2, this.param3, this.param4, this.param5);
        }
        
        else if (this.shapetype == "cone") {
            cone(this.param1, this.param2);
        }
        pop();
    }
    setX(i) {
        this.translateX = i
    }
    setY(i) {
        this.translateY = i
    }
}