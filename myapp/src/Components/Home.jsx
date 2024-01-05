import React, { useEffect } from 'react'
import { BarCharts } from "./BarChart"
import { useDispatch, useSelector } from "react-redux"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { getProducts } from '../redux/actions';
import ChartComponent from './ChartComponent';
import Table from './Table';
Chart.register(CategoryScale);
function Home() {
  const data = useSelector((state) => state.product.products) || []
  const dispatch = useDispatch()

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getProducts())
    }
  }, [data])

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card' style={{ backgroundColor: "white", color: "black", borderWidth: "2px", borderRadius: "15px" }}>
          <div className='card-inner' style={{ backgroundColor: "white", flexDirection: "column", fontWeight: "bold" }}>
            <div style={{ fontWeight: "bold" }}>
              <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>Purchased goods and Services</h6>
              <h6 style={{ fontSize: "10px", marginTop: "-4%", fontWeight: "bold", color: "gray" }}>contribution to Scope3</h6>
            </div>
            <div style={{ width: "95%", backgroundColor: "#fef7f6", borderWidth: "1px 1px 1px 4px", borderStyle: "solid", borderColor: "red", color: "black", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5% 5% 2% 5%" }}>
              <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>441510.9 CO<sub>2</sub>e</h6>
              <h6 style={{ fontSize: "10px", fontWeight: "bold", color: "red" }}>25% YOY</h6>
            </div>
          </div>
        </div>
        <div className='card' style={{ backgroundColor: "white", color: "black", borderWidth: "2px", borderRadius: "15px" }}>
          <div className='card-inner' style={{ backgroundColor: "white", flexDirection: "column", fontWeight: "bold" }}>
            <div style={{ fontWeight: "bold" }}>
              <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>Purchased goods and Services</h6>
              <h6 style={{ fontSize: "10px", marginTop: "-4%", fontWeight: "bold", color: "gray" }}>contribution to Scope3</h6>
            </div>
            <div style={{ width: "95%", backgroundColor: "#fffdf5", borderWidth: "1px 1px 1px 4px", borderStyle: "solid", borderColor: "#ffc400 ", color: "black", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5% 5% 2% 5%" }}>
              <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>441510.9 CO<sub>2</sub>e</h6>
              <h6 style={{ fontSize: "10px", fontWeight: "bold", color: "red" }}>25% YOY</h6>
            </div>
          </div>
        </div>
        <div className='card' style={{ backgroundColor: "white", color: "black", borderWidth: "2px", borderRadius: "15px" }}>
          <div className='card-inner' style={{ backgroundColor: "white", flexDirection: "column", fontWeight: "bold" }}>
            <div style={{ fontWeight: "bold" }}>
              <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>Category-1</h6>
              <h6 style={{ fontSize: "10px", marginTop: "-4%", fontWeight: "bold", color: "gray" }}>contribution to Scope3</h6>
            </div>
            <div style={{ width: "95%", backgroundColor: "#f7fcf9 ", borderWidth: "1px 1px 1px 4px", borderStyle: "solid", borderColor: "#53c59a", color: "black", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5% 5% 2% 5%" }}>
              <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>441510.9 CO<sub>2</sub>e</h6>
              <h6 style={{ fontSize: "10px", fontWeight: "bold", color: "red" }}>25% YOY</h6>
            </div>
          </div>
        </div>
        <div className='card' style={{ backgroundColor: "#53c59a ", color: "#fff",width:"180px",textAlign:"center" }}>
          <div className='card-inner'>
            <h3 style={{ fontSize: "15px", fontWeight: "bold" }}>Total number of reached suppliers</h3>
          </div>
            <h1>143</h1>
        </div>
      </div>

      <div className='charts'>
        <BarCharts data={data} />
      </div>

      <div className="row">
  <div className="col-lg-5 col-md-10 col-sm-15 mb-8 mb-md-10 mb-sm-10">
    {/* Chart Section */}
    <div style={{ height: "300px", width: "100%" }}>
      <ChartComponent data={data} />
    </div>
  </div>
  <div className="col-lg-7 col-md-12 col-sm-12">
    {/* Table Section */}
    <div className="table-responsive">
      <Table data={data}/>
    </div>
  </div>
</div>


    </main>
  )
}

export default Home