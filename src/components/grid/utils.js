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
