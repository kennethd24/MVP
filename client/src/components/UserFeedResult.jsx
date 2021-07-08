import React from 'react';
import Form from 'react-bootstrap/Form';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport, ColumnToggle } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import paginationFactory from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const userFeedResult = (props) => {
  const { SearchBar } = Search;
  const { ToggleList } = ColumnToggle;
  const { newUserFeed } = props;

  const columns = [{
    dataField: 'text',
    text: 'Caption',
    headerStyle: (colum, colIndex) => ({ minwidth: '300px', textAlign: 'center' }),
  }, {
    dataField: 'webVideoUrl',
    text: 'URL',
    formatter: (cell) => (
      <a className="urlContainer" href={cell}>
        {cell}
      </a>
    ),
  }, {
    dataField: 'playCount',
    text: 'Play Count',
    sort: true,
    formatter: (cell) => (
      cell.toLocaleString('en-US')
    ),
  }, {
    dataField: 'diggCount',
    text: 'Likes',
    sort: true,
    formatter: (cell) => (
      cell.toLocaleString('en-US')
    ),
  }, {
    dataField: 'commentCount',
    text: 'Comments',
    sort: true,
    formatter: (cell) => (
      cell.toLocaleString('en-US')
    ),
  }, {
    dataField: 'createTime',
    text: 'Date Posted',
    sort: true,
    formatter: (cell) => {
      let dateObj = cell;
      if (typeof cell !== 'object') {
        dateObj = new Date(cell * 1000);
      }
      if (cell == null) {
        return;
      }
      return `${(`0${dateObj.getMonth() + 1}`).slice(-2)}/${(`0${dateObj.getDate()}`).slice(-2)}/${dateObj.getFullYear()}`;
    },
  },
  ];

  const NoDataIndication = () => (
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
      No Current User
    </div>
  );


  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button type="submit" className="btn btn-outline-success" onClick={handleClick}>Export CSV</button>
      </div>
    );
  };

  return (
    <ToolkitProvider
      keyField="id"
      data={newUserFeed}
      columns={columns}
      bootstrap4
      exportCSV
      search
      columnToggle
    >
      {
        (props) => (
          <div>
            <Form className="row justify-content-center">
              <SearchBar {...props.searchProps} className="mr-sm-2" />
              <MyExportCSV {...props.csvProps} />
            </Form>
            <ToggleList
              {...props.columnToggleProps} />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              striped
              hover
              bordered={false}
              pagination={paginationFactory()}
              overlay={overlayFactory({ spinner: true, styles: { overlay: (base) => ({ ...base, background: 'rgba(255, 0, 0, 0.5)' }) } })}
              noDataIndication={() => <NoDataIndication />}
            />
          </div>
        )
      }
    </ToolkitProvider>
  );
};
export default userFeedResult;
