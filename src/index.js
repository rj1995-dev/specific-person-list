import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const Person = ({ img, name, job, children }) => {
  return (
    <article className="person">
      <img src={img} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
const PersonList = () => {
  return (
    <section className="person-list">
      <Person
        img="./Images/sample_pic_11.jpg"
        name="Ramchandra"
        job="developer"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          accusamus?
        </p>
      </Person>
      <Person img="./Images/sample_pic_10.jpg" name="Rasbehari" job="designer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, fuga.
        </p>
      </Person>
      <Person img="./Images/sample_pic_12.jpg" name="suman Kylan" job="tester">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
          inventore.
        </p>
      </Person>
      <Person img="./Images/sample_pic_15.jpg" name="Akash" job="the boss">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          accusamus?
        </p>
      </Person>
      <Person img="./Images/sample_pic_14.jpg" name="Rajesh" job="hr">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, fuga.
        </p>
      </Person>
      <Person img="./Images/sample_pic_13.jpg" name="kingshuk" job="tester">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
          inventore.
        </p>
      </Person>
    </section>
  );
};

ReactDom.render(<PersonList />, document.getElementById("root"));
