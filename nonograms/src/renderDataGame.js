import nonogramData from './nonogramData';

function renderDropElements(perentNode) {
  for (let i = 0; i < nonogramData.length; i += 1) {
    const dataNon = nonogramData[i];
    const dropElement = document.createElement('li');
    dropElement.className = 'drop-element';
    dropElement.setAttribute('data-index', [i]);
    perentNode.appendChild(dropElement);
    dropElement.textContent = `${dataNon.title} ${dataNon.gridSize[0]} x ${dataNon.gridSize[1]}`;
  }
}

function renderRowClues(perentNode,indx) {
  const cluesDataCol = nonogramData[indx].clues.columns;
  for (let i = 0; i < cluesDataCol.length; i += 1) {
    const cluesRowsElementContainer = document.createElement('div');
    perentNode.appendChild(cluesRowsElementContainer);
    cluesRowsElementContainer.className = 'clues-rows__element-container';
    for (let j = 0; j < cluesDataCol[i].length; j += 1) {
      const clueRowsElement = document.createElement('div');
      cluesRowsElementContainer.appendChild(clueRowsElement);
      clueRowsElement.innerText = cluesDataCol[i][j];
      clueRowsElement.className = 'clues-rows__element';
    }
  }
}

function renderColClues(perentNode, indx) {
  const cluesDataRow = nonogramData[indx].clues.rows;
  for (let i = 0; i < cluesDataRow.length; i += 1) {
    const cluesColumnElementContainer = document.createElement('div');
    perentNode.appendChild(cluesColumnElementContainer);
    cluesColumnElementContainer.className = 'clues-columns__element-container';
    for (let j = 0; j < cluesDataRow[i].length; j += 1) {
      const clueColumnElement = document.createElement('div');
      cluesColumnElementContainer.appendChild(clueColumnElement);
      clueColumnElement.innerText = cluesDataRow[i][j];
      clueColumnElement.className = 'clues-column__element';
    }
  }
}

function renderGameField(perentNode, indx) {
  const gameFieldSize = nonogramData[indx].gridSize;
  for (let i = 0; i < gameFieldSize[0]; i += 1) {
    const columnField = document.createElement('div');
    columnField.className = 'column-field';
    perentNode.appendChild(columnField);
    for (let j = 0; j < gameFieldSize[1]; j += 1) {
      const rowField = document.createElement('div');
      rowField.className = 'row-field';
      columnField.appendChild(rowField);
    }
  }
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export { renderColClues, renderRowClues, renderGameField, renderDropElements, clearContainer};