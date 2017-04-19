'use strict';

import mongoose from 'mongoose';

var DataSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nama: String,
  lat: Number,
  lng: Number,
  layer: String,
  induk: String,
  keterangan: mongoose.Schema.Types.Mixed,
  gambar: String
});

export default mongoose.model('Data', DataSchema);
