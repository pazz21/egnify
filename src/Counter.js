import React from 'react';
import './style.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];
const sections = [];

function addSections(quantity) {
  const startId = sections.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    let priority = 'D';
    if (i % 2 === 0) priority = 'C';
    if (i % 5 === 0) priority = 'B';
    if (i % 7 === 0) priority = 'A';
    sections.push({
      id: id,
      name: 'Item name ' + id,
      priority: priority,
      active: i % 2 === 0 ? 'Y' : 'N'
    });
  }
}

addSections(400);

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = '10230' + i;
    var section = ['A', 'B', 'C', 'D'];
    const sec = section[Math.floor(Math.random() * section.length)];
    const pmarks= Math.floor(Math.random() * 120);
    const cmarks= Math.floor(Math.random() * 120);
    const mmarks= Math.floor(Math.random() * 120);
    const rank= Math.floor(Math.random() * 400);
    const tmarks= pmarks + cmarks + mmarks;
    const ppercent= (pmarks*100)/120;
    const cpercent= (cmarks*100)/120;
    const mpercent= (mmarks*100)/120;
    const tpercent= (tmarks*100)/360;
    products.push({
      id: id,
      campus: "Hyderabad",
      name: 'Student name ' + id,
      pmarks: pmarks,
      cmarks: cmarks,
      mmarks: mmarks,
      tmarks: tmarks,
      ppercent: ppercent,
      cpercent: cpercent,
      mpercent: mpercent,
      tpercent: tpercent,
      sec: sec,
      rank: rank
    });
  }
}

addProducts(400);

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: [], // default select on table
  bgColor: 'rgb(238, 193, 213)',
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
};

function onSelectAll(isSelected) {
  console.log(`is select all: ${isSelected}`);
}

function onRowSelect(row, isSelected) {
  console.log(row);
  console.log(`selected: ${isSelected}`);
}

function onAfterSaveCell(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row);
}


function revertSortFunc(a, b, order) {   // order is desc or asc
  if (order === 'desc') {
    return a.price - b.price;
  } else {
    return b.price - a.price;
  }
}

export default class Counter extends React.Component {
  render() {
    return (
      <div class="container">
      <BootstrapTable data={ products }
       search
       hover
       cellEdit
       >
        <TableHeaderColumn row='0' class='fixed' rowSpan='2' width='150px' dataField='id' dataAlign='center' dataSort isKey autoValue>OMR ID</TableHeaderColumn>
        <TableHeaderColumn row='0' class='fixed' rowSpan='2' width='150px' dataField='name' className='good' dataSort>Student Name</TableHeaderColumn>
        <TableHeaderColumn row='0' rowSpan='2' width='150px' dataSort dataField='campus' className='good' dataSort>Campus</TableHeaderColumn>
        <TableHeaderColumn row='0' rowSpan='2' width='150px' dataField='sec' dataSort>Section</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='3' csvHeader='Physics' dataSort>Physics</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='pmarks' className='good' dataSort>Marks</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='ppercent' width='25%' className='good' dataSort>%</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='rank' className='good' dataSort>Rank</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='3' csvHeader='Chemistry' dataSort>Chemistry</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='cmarks' className='good' dataSort>Marks</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='cpercent' width='25%' className='good' dataSort>%</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='rank' className='good' dataSort>Rank</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='3' csvHeader='Maths' dataSort>Maths</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='mmarks' className='good' dataSort>Marks</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='mpercent' width='25%' className='good' dataSort>%</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='rank' className='good' dataSort>Rank</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='3' csvHeader='Total' dataSort>Total</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='tmarks' className='good' dataSort>Marks</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='rank' className='good' dataSort>SR</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='rank' className='good' dataSort>AIR</TableHeaderColumn>
      </BootstrapTable>
      </div>
      
    );
  }
}