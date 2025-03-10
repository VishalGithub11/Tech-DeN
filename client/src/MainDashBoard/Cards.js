import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Cards.css";
import { ExternalLink } from "react-external-link";
import DeleteIcon from "@material-ui/icons/Delete";

const Cards = ({ group, loading, setUpdateDash }) => {
  if (loading) {
    return <div>loading....</div>;
  }

  if (group === undefined) {
    return <div>Group not loaded yet</div>;
  }

  const deleteGroup = (id) => {
    console.log("delete activated", id);
    const requestOptions = {
      method: "DELETE",
    };
    fetch("http://localhost:8000/api/deletegroup/" + id, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setUpdateDash(true);
      });
  };

  return (
    <div className="cardMain">
      {group.map((item, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Body>
            <Card.Title>{item.groupname}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">
              <ExternalLink href={item.link} className="link">
                Join Meeting
              </ExternalLink>
            </Button>

            <div className="delete-icon" onClick={() => deleteGroup(item._id)}>
              <DeleteIcon />
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;

// import React from "react";
// import { Card, Button } from "react-bootstrap";

// const Cards = ({ data }) => {
//   return (
//     <div>
//       <Card style={{ width: "18rem" }}>
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Cards;
