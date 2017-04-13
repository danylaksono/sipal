'use strict';

import mongoose from 'mongoose';

var DataSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nama: String,
  lat: Number,
  lng: Number,
  layer: String,
  lanal: Array,
  keterangan: String,
  gambar: String
});

export default mongoose.model('Data', DataSchema);
