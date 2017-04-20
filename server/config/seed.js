/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Data from '../api/data/data.model';


User.find({}).remove()
  .then(() => {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@sipal.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });


Data.find({}).remove()
  .then(() => {
    Data.create({
        "nama": "Lantamal 1/Belawan",
        "lat": 3.784303,
        "lng": 98.694221,
        "layer": "lantamal",
        "gambar": "lantamal1.jpg",
        "lanal": ['Lanal 1A/Sabang', 'Lanal 1B/Dumai',
          'Lanal 1C/Lhokseumawe', 'Lanal 1D/Tanjung Balai Asahan'
        ],
        "keterangan": {
          'labuhlaut': {
            'Beton': 'P=250m, L=8m',
            'Kapasitas': 3000,
            'Sandar': 'Mampu disandari  KRI Klas Parchim, Coundor, Frosch LST Korea',
            'Kondisi': '70% (200 meter lama), 100% penambahan 50 meter baru'
          }
        }
      }, {
        "nama": "Lantamal 2/Padang",
        "lat": -0.9470832,
        "lng": 100.417181,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 3/Jakarta",
        "lat": -6.1744651,
        "lng": 106.822745,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 4/Tanjungpinang Riau",
        "lat": 0.9185504,
        "lng": 104.4665072,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 5/Surabaya",
        "lat": -7.2574719,
        "lng": 112.7520883,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 6/Makassar",
        "lat": -5.1476651,
        "lng": 119.4327314,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 7/Kupang",
        "lat": -10.1771997,
        "lng": 123.6070329,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 8/Manado",
        "lat": 1.4748305,
        "lng": 124.8420794,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 9/Tarakan",
        "lat": 3.3273599,
        "lng": 117.5785049,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 10/Jayapura",
        "lat": -2.5916025,
        "lng": 140.6689995,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 11/Merauke",
        "lat": -8.4991117,
        "lng": 140.4049814,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 12/Pontianak",
        "lat": -0.0263303,
        "lng": 109.3425039,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 13/Ambon",
        "lat": -3.6553932,
        "lng": 128.1907723,
        "layer": "lantamal"
      }, {
        "nama": "Lantamal 14/Sorong",
        "lat": -0.8761629,
        "lng": 131.255828,
        "layer": "lantamal"
      }, {
        "nama": "Lanal 1A/Sabang",
        "lat": 5.8926053,
        "lng": 95.3237608,
        "layer": "lanal",
        "induk": "Lantamal I"
      }, {
        "nama": "Lanal 1B/Dumai",
        "lat": 1.6666349,
        "lng": 101.4001855,
        "layer": "lanal",
        "induk": "Lantamal I"
      }, {
        "nama": "Lanal 1C/Lhokseumawe",
        "lat": 5.1811638,
        "lng": 97.1413222,
        "layer": "lanal",
        "induk": "Lantamal I"
      }, {
        "nama": "Lanal 1D/Tanjung Balai Asahan",
        "lat": 3.0424911,
        "lng": 99.8236533,
        "layer": "lanal",
        "induk": "Lantamal I"
      }, {
        "nama": "Lanal 2A/Sibolga",
        "lat": 1.7368371,
        "lng": 98.7851121,
        "layer": "lanal",
        "induk": "Lantamal II"
      }, {
        "nama": "Lanal 2B/Nias",
        "lat": 1.1255279,
        "lng": 97.5247243,
        "layer": "lanal",
        "induk": "Lantamal II"
      }, {
        "nama": "Lanal 2C/Bengkulu",
        "lat": -3.5778471,
        "lng": 102.3463875,
        "layer": "lanal",
        "induk": "Lantamal II"
      }, {
        "nama": "Lanal 3A/Banten",
        "lat": -6.4058172,
        "lng": 106.0640179,
        "layer": "lanal",
        "induk": "Lantamal III"
      }, {
        "nama": "Lanal 3B/Lampung",
        "lat": -4.5585849,
        "lng": 105.4068079,
        "layer": "lanal",
        "induk": "Lantamal III"
      }, {
        "nama": "Lanal 3C/Bangka Belitung",
        "lat": -2.7410513,
        "lng": 106.4405872,
        "layer": "lanal",
        "induk": "Lantamal III"
      }, {
        "nama": "Lanal 3D/Palembang",
        "lat": -2.9760735,
        "lng": 104.7754307,
        "layer": "lanal",
        "induk": "Lantamal III"
      }, {
        "nama": "Lanal 3E/Cirebon",
        "lat": -6.7320229,
        "lng": 108.5523164,
        "layer": "lanal",
        "induk": "Lantamal III"
      }, {
        "nama": "Lanal 3F/Bandung",
        "lat": -6.9174639,
        "lng": 107.6191228,
        "layer": "lanal",
        "induk": "Lantamal III"
      }, {
        "nama": "Lanal 4A/Batam",
        "lat": 1.0456264,
        "lng": 104.0304535,
        "layer": "lanal",
        "induk": "Lantamal IV"
      }, {
        "nama": "Lanal 4B/Tarempa",
        "lat": 3.2211405,
        "lng": 106.2238968,
        "layer": "lanal",
        "induk": "Lantamal IV"
      }, {
        "nama": "Lanal 4C/Ranai",
        "lat": 3.940907,
        "lng": 108.377502,
        "layer": "lanal",
        "induk": "Lantamal IV"
      }, {
        "nama": "Lanal 4D/Dabo Singkep",
        "lat": -0.4791576,
        "lng": 104.5684406,
        "layer": "lanal",
        "induk": "Lantamal IV"
      }, {
        "nama": "Lanal 4E/Tanjung Balai Karimun",
        "lat": 0.995919,
        "lng": 103.4295033,
        "layer": "lanal",
        "induk": "Lantamal IV"
      }, {
        "nama": "Lanal 5A/Cilacap",
        "lat": -7.6982991,
        "lng": 109.023521,
        "layer": "lanal",
        "induk": "Lantamal V"
      }, {
        "nama": "Lanal 5B/Semarang",
        "lat": -7.0051453,
        "lng": 110.4381254,
        "layer": "lanal",
        "induk": "Lantamal V"
      }, {
        "nama": "Lanal 5C/Denpasar",
        "lat": -8.6704582,
        "lng": 115.2126293,
        "layer": "lanal",
        "induk": "Lantamal V"
      }, {
        "nama": "Lanal 5D/Banyuwangi",
        "lat": -8.2190944,
        "lng": 114.3691416,
        "layer": "lanal",
        "induk": "Lantamal V"
      }, {
        "nama": "Lanal 5E/Tegal",
        "lat": -6.8797041,
        "lng": 109.1255917,
        "layer": "lanal",
        "induk": "Lantamal V"
      }, {
        "nama": "Lanal 5F/Batuporon",
        "lat": -7.1572222,
        "lng": 112.7547222,
        "layer": "lanal",
        "induk": "Lantamal V"
      }, {
        "nama": "Lanal 5G/Malang",
        "lat": -7.9666204,
        "lng": 112.6326321,
        "layer": "lanal",
        "induk": "Lantamal V"
      }, {
        "nama": "Lanal 5H/Yogyakarta",
        "lat": -7.7955798,
        "lng": 110.3694896,
        "layer": "lanal",
        "induk": "Lantamal V"
      }, {
        "nama": "Lanal 6A/Kendari",
        "lat": -3.9984597,
        "lng": 122.5129742,
        "layer": "lanal",
        "induk": "Lantamal VI"
      }, {
        "nama": "Lanal 6B/Palu",
        "lat": -0.9002915,
        "lng": 119.8779987,
        "layer": "lanal",
        "induk": "Lantamal VI"
      }, {
        "nama": "Lanal 7A/Maumere",
        "lat": -8.6245515,
        "lng": 122.2146964,
        "layer": "lanal",
        "induk": "Lantamal VII"
      }, {
        "nama": "Lanal 7B/Mataram",
        "lat": -8.5769951,
        "lng": 116.1004894,
        "layer": "lanal",
        "induk": "Lantamal VII"
      }, {
        "nama": "Lanal 7C/Pulau Rote",
        "lat": -10.7386421,
        "lng": 123.1239049,
        "layer": "lanal",
        "induk": "Lantamal VII"
      }, {
        "nama": "Lanal 8A/Toli-Toli",
        "lat": 0.8768231,
        "lng": 120.7579834,
        "layer": "lanal",
        "induk": "Lantamal VIII"
      }, {
        "nama": "Lanal 8B/Tahuna",
        "lat": -37.5014249,
        "lng": 175.4942456,
        "layer": "lanal",
        "induk": "Lantamal VIII"
      }, {
        "nama": "Lanal 8C/Gorontalo",
        "lat": 0.6999372,
        "lng": 122.4467238,
        "layer": "lanal",
        "induk": "Lantamal VIII"
      }, {
        "nama": "Lanal 9A/Tual",
        "lat": -5.5680317,
        "lng": 132.3446399,
        "layer": "lanal",
        "induk": "Lantamal IX"
      }, {
        "nama": "Lanal 9B/Saumlaki",
        "lat": -8.052236,
        "lng": 131.2130532,
        "layer": "lanal",
        "induk": "Lantamal IX"
      }, {
        "nama": "Lanal 10A/Biak",
        "lat": -1.0381022,
        "lng": 135.9800848,
        "layer": "lanal",
        "induk": "Lantamal X"
      }, {
        "nama": "Lanal 10B/Manokwari",
        "lat": -0.8614531,
        "lng": 134.0620421,
        "layer": "lanal",
        "induk": "Lantamal X"
      }, {
        "nama": "Lanal 11A/Aru Morotai",
        "lat": 2.6034198,
        "lng": 128.5795405,
        "layer": "lanal",
        "induk": "Lantamal XI"
      }, {
        "nama": "Lanal 11B/Timika",
        "lat": -4.546759,
        "lng": 136.8837207,
        "layer": "lanal",
        "induk": "Lantamal XI"
      }, {
        "nama": "Lanal 12A/Sambas",
        "lat": 1.3626937,
        "lng": 109.3009462,
        "layer": "lanal",
        "induk": "Lantamal XII"
      }, {
        "nama": "Lanal 12B/Ketapang",
        "lat": -1.5697615,
        "lng": 110.5215459,
        "layer": "lanal",
        "induk": "Lantamal XII"
      }, {
        "nama": "Lanal 13A/Nunukan",
        "lat": 4.0809649,
        "lng": 116.6081653,
        "layer": "lanal",
        "induk": "Lantamal XIII"
      }, {
        "nama": "Lanal 13B/Sangatta",
        "lat": 0.549955,
        "lng": 117.5730639,
        "layer": "lanal",
        "induk": "Lantamal XIII"
      }, {
        "nama": "Lanal 13C/Balikpapan",
        "lat": -1.2379274,
        "lng": 116.8528526,
        "layer": "lanal",
        "induk": "Lantamal XIII"
      }, {
        "nama": "Lanal 13D/Banjarmasin",
        "lat": -3.3186067,
        "lng": 114.5943784,
        "layer": "lanal",
        "induk": "Lantamal XIII"
      }, {
        "nama": "Lanal 13E/Kota Baru",
        "lat": -3.2386777,
        "lng": 116.2233131,
        "layer": "lanal",
        "induk": "Lantamal XIII"
      }, {
        "nama": "Lanal 14A/Ternate",
        "lat": 0.7957999,
        "lng": 127.3613533,
        "layer": "lanal",
        "induk": "Lantamal XIV"
      }, {
        "nama": "Lanal 14B/Morotai",
        "lat": 2.3656672,
        "lng": 128.4008357,
        "layer": "lanal",
        "induk": "Lantamal XIV"
      }, {
        "nama": "Lanal 14C/Melonguane",
        "lat": 4.0430046,
        "lng": 126.7172882,
        "layer": "lanal",
        "induk": "Lantamal XIV"
      })
      .then(() => {
        console.log('finished populating data');
      });
  });
