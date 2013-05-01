var isArray = function(arg) {
    if( Object.prototype.toString.call( arg ) === '[object Array]' ) {
        return true;
    } else {
        return false;
    }
}

var _giulio = function(x,y) {
    var p;
    if(typeof x === "number") {
        p = ["M", x + ',' + y];
    } else {
        p = [];
    }

    return {
        _path: p,
        _moveto: function(relative, first, x, y) {
            if(first && relative) {
                this._path.push("m");
            } else if(first && !relative) {
                this._path.push("M");
            }

            this._path.push(x + ',' + y);

        },
        m: function(x, y) {
            var i;
            if(isArray(x)) {
                this._moveto(true, true, x[0][0], x[0][1])
                for(i = 1; i < x.length; i++) {
                    this._moveto(true, false, x[i][0], x[i][1])
                }
                return this;
            } else {
                this._moveto(true, true, x, y);
                return this;
            }
        },
        M: function(x, y) {
            var i;
            if(isArray(x)) {
                this._moveto(false, true, x[0][0], x[0][1])
                for(i = 1; i < x.length; i++) {
                    this._moveto(false, false, x[i][0], x[i][1])
                }
                return this;
            } else {
                this._moveto(false, true, x, y);
                return this;
            }
        },
        moveTo: function(x, y) {
            return this.m(x, y);
        },
        MoveTo: function(x, y) {
            return this.M(x, y);
        },
        _lineto: function(relative, first, x, y) {
            if(first && relative) {
                this._path.push("l");
            } else if(first && !relative) {
                this._path.push("L");
            }

            this._path.push(x + ',' + y);

        },
        l: function(x, y) {
            var i;
            if(isArray(x)) {
                this._lineto(true, true, x[0][0], x[0][1])
                for(i = 1; i < x.length; i++) {
                    this._lineto(true, false, x[i][0], x[i][1])
                }
                return this;
            } else {
                this._lineto(true, true, x, y);
                return this;
            }
        },
        L: function(x, y) {
            var i;
            if(isArray(x)) {
                this._lineto(false, true, x[0][0], x[0][1])
                for(i = 1; i < x.length; i++) {
                    this._lineto(false, false, x[i][0], x[i][1])
                }
                return this;
            } else {
                this._lineto(false, true, x, y);
                return this;
            }
        },
        lineTo: function(x, y) {
            return this.l(x, y);
        },
        LineTo: function(x, y) {
            return this.L(x, y);
        },

        _vlineto: function(relative, first, y) {
            if(first && relative) {
                this._path.push("v");
            } else if(first && !relative) {
                this._path.push("V");
            }

            this._path.push(y);

        },
        v: function(y) {
            var i;
            if(isArray(y)) {
                this._vlineto(true, true, y[0])
                for(i = 1; i < y.length; i++) {
                    this._vlineto(true, false, y[i])
                }
                return this;
            } else {
                this._vlineto(true, true, y);
                return this;
            }
        },
        V: function(y) {
            var i;
            if(isArray(y)) {
                this._vlineto(false, true, y[0])
                for(i = 1; i < y.length; i++) {
                    this._vlineto(false, false, y[i])
                }
                return this;
            } else {
                this._vlineto(false, true, y);
                return this;
            }
        },
        vLineTo: function(y) {
            return this.v(y);
        },
        VLineTo: function(y) {
            return this.V(y);
        },

        _hlineto: function(relative, first, x) {
            if(first && relative) {
                this._path.push("h");
            } else if(first && !relative) {
                this._path.push("H");
            }

            this._path.push(x);

        },
        h: function(x) {
            var i;
            if(isArray(x)) {
                this._hlineto(true, true, x[0])
                for(i = 1; i < x.length; i++) {
                    this._hlineto(true, false, x[i])
                }
                return this;
            } else {
                this._hlineto(true, true, x);
                return this;
            }
        },
        H: function(x) {
            var i;
            if(isArray(x)) {
                this._hlineto(false, true, x[0])
                for(i = 1; i < x.length; i++) {
                    this._hlineto(false, false, x[i])
                }
                return this;
            } else {
                this._hlineto(false, true, x);
                return this;
            }
        },
        hLineTo: function(x) {
            return this.h(x);
        },
        HLineTo: function(x) {
            return this.H(x);
        },

        _smoothquadcurveto: function(relative, first, x, y) {
            if(first && relative) {
                this._path.push("t");
            } else if(first && !relative) {
                this._path.push("T");
            }

            this._path.push(x + ',' + y);

        },
        t: function(x, y) {
            var i;
            if(isArray(x)) {
                this._smoothquadcurveto(true, true, x[0][0], x[0][1])
                for(i = 1; i < x.length; i++) {
                    this._smoothquadcurveto(true, false, x[i][0], x[i][1])
                }
                return this;
            } else {
                this._smoothquadcurveto(true, true, x, y);
                return this;
            }
        },
        T: function(x, y) {
            var i;
            if(isArray(x)) {
                this._smoothquadcurveto(false, true, x[0][0], x[0][1])
                for(i = 1; i < x.length; i++) {
                    this._smoothquadcurveto(false, false, x[i][0], x[i][1])
                }
                return this;
            } else {
                this._smoothquadcurveto(false, true, x, y);
                return this;
            }
        },
        smoothQuadCurveTo: function(x, y) {
            return this.t(x, y);
        },
        SmoothQuadCurveTo: function(x, y) {
            return this.T(x, y);
        },

        _curveto: function(relative, first, c1, c2, p) {
            if(first && relative) {
                this._path.push("c");
            } else if(first && !relative) {
                this._path.push("C");
            }

            this._path.push(c1[0] + ',' + c1[1]);
            this._path.push(c2[0] + ',' + c2[1]);
            this._path.push(p[0] + ',' + p[1]);

        },
        c: function(c1, c2, p) {
                this._curveto(true, true, c1, c2, p);
                return this;
        },
        C: function(x, y) {
                this._curveto(false, true, c1, c2, p)
                return this;
        },
        curveTo: function(c1, c2, p) {
            return this.c(c1, c2, p);
        },
        CurveTo: function(c1, c2, p) {
            return this.C(c1, c2, p);
        },

        _smoothcurveto: function(relative, first, c2, p) {
            if(first && relative) {
                this._path.push("s");
            } else if(first && !relative) {
                this._path.push("S");
            }

            this._path.push(c2[0] + ',' + c2[1]);
            this._path.push(p[0] + ',' + p[1]);

        },
        s: function(c2, p) {
            this._smoothcurveto(true, true, c2, p);
            return this;
        },
        S: function(x, y) {
            this._smoothcurveto(false, true, c2, p)
            return this;
        },
        smoothCurveTo: function(c2, p) {
            return this.s(c2, p);
        },
        SmoothCurveTo: function(c2, p) {
            return this.S(c2, p);
        },

        _arcto: function(relative, first, rx, ry, xrot, larc, sweep, x, y) {
            if(first && relative) {
                this._path.push("a");
            } else if(first && !relative) {
                this._path.push("A");
            }

            this._path.push(rx + ',' + ry);
            this._path.push(xrot);
            this._path.push(larc + ',' + sweep);
            this._path.push(x + ',' + y);

        },
        a: function(rx, ry, xrot, larc, sweep, x, y) {
            this._arcto(true, true, rx, ry, xrot, larc, sweep, x, y);
            return this;
        },
        A: function(rx, ry, xrot, larc, sweep, x, y) {
            this._arcto(false, true, rx, ry, xrot, larc, sweep, x, y);
            return this;
        },
        arcTo: function(rx, ry, xrot, larc, sweep, x, y) {
            return this.a(rx, ry, xrot, larc, sweep, x, y);
        },
        ArcTo: function(rx, ry, xrot, larc, sweep, x, y) {
            return this.A(rx, ry, xrot, larc, sweep, x, y);
        },

        spiral: function(x, y, spacing, mr) {
            var angle = 0,
                startX = x,
                startY = y;

            this._path.push("a");

            for(var r = 0; r < mr; r++) {
                angle += spacing;
                var endX = x + r * Math.cos(angle * Math.PI/180);
                var endY = y + r * Math.sin(angle * Math.PI/180);
                this._arcto(true, false, r, r, 0, 0, 1, endX - startX, endY - startY);
                startX = endX; startY = endY;
            }
            return this;
        },

        end: function() {
            return this._path.join(' ');
        }
    }
};

var giulio = function(x,y) {
    return new _giulio(x,y);
}



