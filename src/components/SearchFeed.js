import { FetchAPI } from "./utils/FetchApi";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    FetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
