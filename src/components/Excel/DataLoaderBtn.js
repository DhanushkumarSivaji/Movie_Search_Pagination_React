import React, { Component } from 'react';
import XLSX from 'xlsx'
import { Accordion, Card,Button } from "react-bootstrap";
import {Tab,Row,Col,Nav} from 'react-bootstrap'
class Excel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filter: "",
            data:[]
         };
         this.parseExcel = this.parseExcel.bind(this)
         this.handleFileSelect = this.handleFileSelect.bind(this)
    }

    parseExcel = (file) =>{
  
        var reader = new FileReader();

        reader.onload = (e) => {
          var data = e.target.result;
          var workbook = XLSX.read(data, {
            type: 'binary'
          });
          workbook.SheetNames.forEach((sheetName) => {
            console.log('sheetName',sheetName)
            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            var json_object = JSON.stringify(XL_row_object);
            var DataObject = JSON.parse(json_object)

            switch(sheetName){
                case 'Sheet1':
                        this.setState({data:DataObject})
                        break
                return
            }
           
           console.log(DataObject)
          })
        };

        reader.onerror = (ex) => {
          console.log(ex);
        };

        reader.readAsBinaryString(file);
      };

     handleFileSelect = (evt) => {
    
        var files = evt.target.files; // FileList object
        
         this.parseExcel(files[0]);
      }

      handleChange = event => {
        this.setState({ filter: event.target.value });
      };

    render() {
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        // const filteredData = data.filter(item => {
        //   return Object.keys(item).some(key =>
        //     item[key].toLowerCase().includes(lowercasedFilter)
        //   );
        // });
         let filteredData = data.filter(item =>{
             return item.JOB_NAME.toLowerCase().indexOf(filter.toLowerCase()) !== -1
         })
        return (
           <div className="container">
               <form encType="multipart/form-data">
                    <input id="upload" type='file'  name="files[]" onChange={this.handleFileSelect}/>
                </form>
                <div>
                {/* { this.state.data && this.state.data.map(i => (
                 <div>
                 <Accordion>
                      <Card>
                          <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              {i.JOB_NAME}
                          </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                          <Card.Body>Frequency : {i.FREQUENCY}</Card.Body>
                          </Accordion.Collapse>
                      </Card>
                  </Accordion>
                 </div> 
                ))}  */}
                  <input value={filter} onChange={this.handleChange} />
          {filteredData.map(item => (
             <div>
                          <div>
                 <Accordion>
                      <Card>
                          <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              {item.JOB_NAME}
                          </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                          <Card.Body>Frequency : {item.FREQUENCY}</Card.Body>
                          </Accordion.Collapse>
                      </Card>
                  </Accordion>
                 </div> 
             </div>
          ))}

                </div>
           </div> 
        );
    }
}

export default Excel;

//  <div>
// <Accordion>
//      <Card>
//          <Card.Header>
//          <Accordion.Toggle as={Button} variant="link" eventKey="0">
//              {i.JOB_NAME}
//          </Accordion.Toggle>
//          </Card.Header>
//          <Accordion.Collapse eventKey="0">
//          <Card.Body>Frequency : {i.FREQUENCY}</Card.Body>
//          </Accordion.Collapse>
//      </Card>
//  </Accordion>
// </div> 