import React,{Component} from "react"
import axios from "axios"


class create extends Component{

constructor(props){
super(props)
    this.onChangePersonName =this.onChangePersonName.bind(this)
this.onChangeBusinessName=this.onChangeBusinessName.bind(this)
this.onChangeNICNumber=this.onChangeNICNumber.bind(this)
this.onSubmit=this.onSubmit.bind(this)

this.state={
person_name:"",
business_name:"",
business_nic_number:""

}

}

onChangePersonName(e){
this.setState({
    person_name:e.target.value
})
}

onChangeBusinessName(e){
this.setState(
    {business_name:e.target.value})
}

onChangeNICNumber(e){
this.setState(
    {business_nic_number:e.target.value})
}

onSubmit(e) {
    e.preventDefault();
    const obj ={
        person_name:this.state.person_name,
        business_name:this.state.business_name,
        business_nic_number:this.state.business_nic_number

    }

    axios.post("http://localhost:4000/business/add",obj).then(res=>console.log(res.data)

    )

    this.setState({
        person_name:"",
        business_name:"",
        business_nic_number:""


    })

    
    
  }




    render(){
        return(
           <div className="container" style={{marginTop:10}}>
              
              <h4>Add New Business</h4>

              <form className="mt-5" onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Add Person Name:</label>
                      <input type="text" value={this.state.person_name} onChange={this.onChangePersonName} className="form-control"/>
                  </div>


                  <div className="form-group">
                      <label>Add Business Name:</label>
                      <input type="text" value={this.state.business_name} onChange={this.onChangeBusinessName} className="form-control"/>
                  </div>


                  <div className="form-group">
                      <label>Add NIC Number:</label>
                      <input value={this.state.business_nic_number} onChange={this.onChangeNICNumber} type="text" className="form-control"/>
                  </div>

                  <div className="form-group">
                     <input type="submit" value="Register" className="btn btn-primary"/>
                  </div>
              </form>




           </div>
        )
    }
}

export default create