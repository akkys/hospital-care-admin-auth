import React from "react";

const LabRoom = (props) => {
  const { room } = props;

  return (
    <tbody>
      <tr style={{ textAlign: "center" }}>
        <td>{room.num}</td>
        <td>{room.name}</td>
        <td>{room.groups}</td>
        <td>{room.capacity}</td>
        <td>
          {room.fromTime} - {room.toTime}
        </td>
      </tr>
    </tbody>
  );
};

export default LabRoom;
