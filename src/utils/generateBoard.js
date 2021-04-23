import { queryAllByRole } from "@testing-library/react";

export const suduko = () =>  {
    var i, q, opt, row, spot, weak, current, tmp, badFlag;


    var scramble = function (arr) { //returns array in scrambled order
        var i, len, obj, sorter, rnd, res;
        obj = {};
        sorter = [];
        res = [];
        len = arr.length;
        i = 0;
        while (i < len) {
            rnd = Math.random() + "";
            if (obj[rnd]) {
                continue;
            }
            obj[rnd] = arr[i];
            i++;
            sorter.push(rnd);
        }
        sorter = sorter.sort();

        for (i = 0; i < len; i++) {
            res.push(obj[sorter[i]]);
        }

        return res;
    }

    //=================================


    var join = function (a1, a2) { //joins two arrays but strains out duplicate values
        var arr, i, len, v;
        arr = a1.concat(a2);
        len = arr.length;
        for (i = 0; i < len; i++) {
            v = arr.shift();
            if (arr.indexOf(v) !== -1) {
                continue;
            }
            arr.push(v);
        }
        return arr;
    }

    var getColumn = function (off) { //gets all values in the specified column
        var i, arr, v;
        arr = [];
        for (i = 0; i < 9; i++) {
            v = q[i][off];
            if (v !== 0) {
                arr.push(v);
            }
        }
        return arr;
    }

    var getRow = function (off) {//gets all values in a row
        var i, arr, v;
        arr = [];
        for (i = 0; i < 9; i++) {
            v = q[off][i];
            if (v !== 0) {
                arr.push(v);
            }
        }
        return arr;
    }

    var invert = function (arr) { //gives all values that are NOT in the argument array
        var i, res, b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        b = scramble(b);
        res = [];
        for (i = 0; i < 9; i++) {
            if (arr.indexOf(b[i]) === -1) {
                res.push(b[i]);
            }
        }
        return res;
    }

    var getGrid = function (col, row) { //gives all the current values in the 3X3 box to which it belongs
        var res, i, j, v,jmp;
        jmp = [0, 3, 6, 9];
        res = [];
        col = Math.floor(col / 3);
        col = jmp[col];
        row = Math.floor(row / 3);
        row = jmp[row];

        for (i = row; i < (row + 3); i++) {
            for (j = col; j < (col + 3); j++) {
                v = q[i][j];
                if (res.indexOf(v) === -1 && v !== 0) {
                    res.push(v);
                }
            }
        }
        return res;
    }

    var getSet = function (c, r) {  //get all current possible valid options for the position
        var a, b, c;
        a = getGrid(c, r);
        b = getRow(r);
        c = getColumn(c);
        a = join(a, b);
        a = join(a, c);
        a = invert(a);
        return a;
    }

    var init = function () { //build the 2D array and set all values to zero
        var i, j;
        q = [];
        for (i = 0; i < 9; i++) {
            q[i] = [];
            for (j = 0; j < 9; j++) {
                q[i][j] = 0;
            }
        }

    }
    //======== loop until the heuristic provides a valid puzzle
    do {
        init();
        opt = scramble([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (i = 0; i < 9; i++) {
            q[0][i] = opt[i];
        }
        opt = opt.slice(3, 9);
        opt = scramble(opt);

        for (i = 0; i < 3; i++) {
            q[1][i] = opt[i];
            q[2][i] = opt[(i + 3)];
        }

        badFlag = false;

        for (row = 1; row < 9; row++) {
            while (true) {
                tmp = getRow(row);
                if (tmp.length === 9) {
                    break;
                }
                weak = 10;
                for (i = 0; i < 9; i++) {
                    if (q[row][i] !== 0) {
                        continue;
                    }
                    tmp = getSet(i, row);
                    if (tmp.length < weak) {
                        weak = tmp.length;
                        spot = i;
                    }
                }
                current = getSet(spot, row);
                if (current.length === 0) {  //heuristic failed--try again
                    badFlag = true;
                    break;
                }
                tmp = current.pop();
                q[row][spot] = tmp;
            }

            if (badFlag) {
                break;
            }

        } //end of row
    } while (badFlag);
    q.map((row) => {
        for(var sh=0;sh<9;sh++) {
            row[sh] = {value: row[sh],isPrefilled: true}
        }
    })

  return q;
}