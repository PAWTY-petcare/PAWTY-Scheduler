import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Flask, request, jsonify } from flask;

export const Schedule = () => {
    const { store, actions } = useContext(Context);
    const express = require('express');
    const app = express();
    const server = require('http').Server(app);
    const io = require('socket.io')(server);
    const axios = require('axios');
    const port = 3000;

    io.on('connection', (socket) => {
        console.log('a user connected');
      
        socket.on('appointment made', (timeSlot) => {
          // Forward the appointment to the Python server
          axios.post('http://localhost:5000/appointment', { timeSlot })
            .then((res) => {
              // Notify all clients of the update
              io.emit('schedule update', res.data.schedule);
            })
            .catch((error) => {
              console.error(error);
            });
        });
      });
      
      server.listen(port, () => console.log(`Server running at http://localhost:${port}`));
