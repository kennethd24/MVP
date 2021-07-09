import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport, ColumnToggle } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import paginationFactory from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import InnerHTML from 'dangerously-set-html-content';

const userFeedResult = (props) => {
  const { SearchBar } = Search;
  const { ToggleList } = ColumnToggle;
  const { newUserFeed } = props;
  const [modalShow, setModalShow] = useState(false);
  const [url, setUrl] = useState('');
  // const [url, setUrl] = useState(`https://www.tiktok.com/@scout2015/video/6718335390845095173`);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const results = await axios.get(`https://www.tiktok.com/oembed?url=${url}`);
  //     console.log(results.data.html);
  //     setUrl(results.data.html);
  //   };
  //   fetchData();
  // }, [modalShow]);

  const handleModalClick = async (inputUrl) => {
    const results = await axios.get(`https://www.tiktok.com/oembed?url=${inputUrl}`);
    setUrl(results.data.html);
    setModalShow(true);
  };

  const columns = [{
    dataField: 'text',
    text: 'Caption',
  }, {
    dataField: 'webVideoUrl',
    text: 'URL',
    formatter: (cell) => (
      <a aria-hidden="true" className="urlContainer" onClick={() => handleModalClick(cell)}>
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
  const createEmbedMarkup = (html) => ({
    __html: html,
  });

  const MyVerticallyCenteredModal = (props) => (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div>
          <InnerHTML html={createEmbedMarkup(url).__html} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div>
      <ToolkitProvider
        keyField="id"
        data={newUserFeed}
        columns={columns}
        bootstrap4
        exportCSV
        search
        columnToggle
        overlay={overlayFactory({ spinner: true, styles: { overlay: (base) => ({ ...base, background: 'rgba(255, 0, 0, 0.5)' }) } })}
      >
        {
          (props) => (
            <div>
              <Form className="row justify-content-center">
                <SearchBar {...props.searchProps} className="mr-sm-2" />
                <MyExportCSV {...props.csvProps} />
              </Form>
              <Col className="row justify-content-center">
                <ToggleList
                  {...props.columnToggleProps}
                />
              </Col>
              <hr />
              <BootstrapTable
                {...props.baseProps}
                striped
                hover
                bordered={false}
                pagination={paginationFactory()}
                noDataIndication={() => <NoDataIndication />}
              />
            </div>
          )
        }
      </ToolkitProvider>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default userFeedResult;
