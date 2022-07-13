import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listRooms } from "../../actions/RoomAction";
import TableHead from "../../misc/TableHead";
import PageHeader from "../Layout/PageHeader";
import PaginationButton from "../Layout/PaginationButton";
import LoadingPage from "../Pages/LoadingPage";
import LabRoom from "./LabRoom";

const LabRoomPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultPerPage] = useState(5);

  const roomList = useSelector((state) => state.roomList);
  const { rooms, loading } = roomList;

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Laboratory | A S K Hospitals";
    dispatch(listRooms());
  }, [dispatch]);

  //Pagination
  const indexOfLastResult = currentPage * resultPerPage;
  const indexOfFirstResult = indexOfLastResult - resultPerPage;
  const currentResult = rooms.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < rooms.length / resultPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const roomListData = currentResult.map((room, i) => {
    return <LabRoom key={i} room={room} />;
  });

  const contents = ["No.", "Room Name", "Sample Groups", "Capacity", "Timing"];

  return loading ? (
    <LoadingPage />
  ) : (
    <div className="home-container container">
      <PageHeader
        data={rooms}
        fullTitle="List of Labs available in our Hospital"
      />
      <div className="container mt-3">
        {rooms.length > 0 && (
          <TableHead contents={contents} data={roomListData} style="center" />
        )}
      </div>
      <PaginationButton
        PerPage={resultPerPage}
        total={rooms.length}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        perPageLength={currentResult.length}
      />
    </div>
  );
};

export default LabRoomPage;
