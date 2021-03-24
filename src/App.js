import {  useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [tableData, setTableData] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data, e) => {
    if (isEditMode) {
      setIsEditMode(false);
      const elementsIndex = tableData.findIndex(
        (element) => element.id === data.id
      );

      setTableData((prevValue) => {
        var a = [...prevValue];
        a[elementsIndex] = data;
        return a;
      });
    } else {
      var id = Date.now().toString();
      data = { ...data, id: id };
      setTableData((prevData) => [...prevData, data]);
    }
    e.target.reset();
    // console.log(data);
  };

 
  function deleteRow(id) {
    const elementsIndex = tableData.findIndex((element) => element.id === id);
    // var a = tableData;
    // a.splice(elementsIndex, 1);
    console.log(elementsIndex, id);
    setTableData((prevValue) => {
      var a = [...prevValue];
      a.splice(elementsIndex, 1);
      return a;
    });
    console.log(tableData);
  }
  function setedit(row) {
    // const elementsIndex = tableData.findIndex((element) => element.id === id);
    // var a = tableData;
    setValue("id", row?.id);
    setValue("userName", row?.userName);
    setValue("emailAddress", row?.emailAddress);
    setValue("age", row?.age);
    setValue("eyeColor", row?.eyeColor);
    setValue("balance", row?.balance);
    setIsEditMode(true);
  }

  return (
    <div className='app'>
      <div className='app_table'>
        <Table data={tableData} setedit={setedit} deleteRow={deleteRow} />
      </div>
      <div className='app_form'>
        <Form
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
