import Winner from 'tic-tac-toe/winner'

const winner = {
    map: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]
};

export default {
    length: 9,
    winner: {
        get: function (matrix, choose) {
            const map = winner.map;
            for (let i = 0, length = map.length; i < length; ++i) {
                const line = map[i];

                if (matrix[line[0]] === choose && matrix[line[1]] === choose && matrix[line[2]] === choose) {
                    return new Winner(choose, line);
                }
            }

            return null;
        },
        search: function (matrix) {
            const map = winner.map;
            for (let i = 0, length = map.length; i < length; ++i) {
                const line = map[i];

                const choose = matrix[line[0]];

                if (choose && matrix[line[1]] === choose && matrix[line[2]] === choose) {
                    return new Winner(choose, line);
                }
            }

            return null;
        }
    }
}