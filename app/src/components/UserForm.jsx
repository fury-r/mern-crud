
import {  Form  } from "react-bootstrap";

const UserForm=({errors,onChange,data})=>(
    <Form>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name <label className="red">*</label></Form.Label>
      <Form.Control
        type="text"
        placeholder="Elon Musk"
        value={data.name}
        onChange={onChange}
        name="name"
        required
      />
      {errors.name ? (
        <label style={{ fontSize: "13px", color: "red" }}>
          {errors.name}
        </label>
      ) : (
        <></>
      )}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label aria-required>Email  <label className="red">*</label></Form.Label>
      <Form.Control
        type="email"
        placeholder="elonmusk@123.com"
        value={data.email}
        onChange={onChange}
        required
        name="email"
        
      />
      {errors.email ? (
        <label style={{ fontSize: "13px", color: "red" }}>
          {errors.email}
        </label>
      ) : (
        <></>
      )}
    </Form.Group>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicAge" style={{flex:0.4}}>
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="12"
          value={data.age}
          onChange={onChange}
          name="age"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicGender " style={{flex:0.4}}>
        <Form.Label>Gender</Form.Label>

        <Form.Select onChange={onChange} name="gender" value={data.gender}>
        <option value=""></option>

          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
      </Form.Group>
    </div>
   
  </Form>
)
export default UserForm