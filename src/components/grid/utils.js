export const draw = (refField, figures) => {
    const rowsChildNodes = refField.current.childNodes;
    if (figures.length === 0) {
        for (let i = 0; i <= rowsChildNodes.length - 1; i++) {
            const colsChildNodes = rowsChildNodes[i].childNodes;
            for (let j = 0; j <= colsChildNodes.length - 1; j++) {
                colsChildNodes[j].style.backgroundColor = 'white';
                colsChildNodes[j].dataset.full = '0';
            }
        }
    } else {
        figures.forEach(({
            xCoordinate, yCoordinate, width, height, color
        }) => {
            for (let i = 0; i <= height - 1; i++) {
                const colsChildNodes = rowsChildNodes[yCoordinate + i - 1].childNodes;
                for (let j = 0; j <= width - 1; j++) {
                    colsChildNodes[j + xCoordinate - 1].style.backgroundColor = color;
                    colsChildNodes[j + xCoordinate - 1].dataset.full = '1';
                }
            }
        });
    }
};

export const prepareDigitField = (refField) => {
    const field = [];
    const rowsChildNodes = refField.current.childNodes;
    for (let i = 0; i <= rowsChildNodes.length - 1; i++) {
        const colsChildNodes = rowsChildNodes[i].childNodes;
        const row = [];
        for (let j = 0; j <= colsChildNodes.length - 1; j++) {
            row.push(Number(colsChildNodes[j].dataset?.full ?? '0'));
        }
        field.push(row);
    }
    return field;
};

export const placeAlgorithm = (field, width, height) => {
    const sizeOfSpaceHorizontal = (row, startIndex) => {
        let size = 1;
        for (let i = startIndex; i <= row.length - 1; i++) {
            if (row[i] === 1) {
                return size;
            }
            size++;
        }
        return size;
    };
    const sizeOfSpaceVertical = (startIndex, indexCol) => {
        let size = 1;
        for (let i = startIndex; i <= field.length - 1; i++) {
            if (field[i][indexCol] === 1) {
                return { size, resizeVertical: false };
            }
            size++;
        }
        return { size, resizeVertical: true };
    };
    for (let i = 0; i <= field.length - 1; i++) {
        const row = field[i];
        for (let j = 0; j <= row.length - 1; j++) {
            if (row[j] === 0) {
                if (width > sizeOfSpaceHorizontal(row, j) - 1) {
                    break;
                } else {
                    const { size, resizeVertical } = sizeOfSpaceVertical(i, j);
                    if (height > size - 1) {
                        if (!resizeVertical) {
                            break;
                        } else {
                            return { newXCoordinate: j + 1, newYCoordinate: i + 1, resizeVertical: true };
                        }
                    } else {
                        return { newXCoordinate: j + 1, newYCoordinate: i + 1, resizeVertical: false };
                    }
                }
            }
        }
    }
};
