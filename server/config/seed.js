/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Data from '../api/data/data.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
        'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
        'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
        'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
        'tests alongside code. Automatic injection of scripts and ' +
        'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
        'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
        'payload, minifies your scripts/css/images, and rewrites asset ' +
        'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
        'and openshift subgenerators'
    });
  });

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
        nama: 'Lantamal 1/Belawan',
        lat: '3.784303',
        lng: '98.694221'

      }, {
        nama: 'Lantamal 2/Padang',
        lat: '-0.9470832',
        lng: '100.417181'
      }, {
        nama: 'Lantamal 3/Jakarta',
        lat: '-6.1744651',
        lng: '106.822745'
      }, {
        nama: 'Lantamal 4/Tanjung Pinang',
        lat: '0.9185504',
        lng: '104.4665072'
      }, {
        nama: 'Lantamal 5/Surabaya',
        lat: '-7.2574719',
        lng: '112.7520883'
      }, {
        nama: 'Lantamal 6/Makassar',
        lat: '-5.1476651',
        lng: '119.4327314'
      }, {
        nama: 'Lantamal 7/Kupang',
        lat: '-10.1771997',
        lng: '123.6070329'
      }, {
        nama: 'Lantamal 8/Manado',
        lat: '1.4748305',
        lng: '124.8420794'
      }, {
        nama: 'Lantamal 9/Ambon',
        lat: '-3.6974',
        lng: '128.1833'
      }, {
        nama: 'Lantamal 10/Jayapura',
        lat: '-2.5916025',
        lng: '140.6689995'
      }, {
        nama: 'Lantamal 11/Merauke',
        lat: '-8.4991117',
        lng: '140.4049814'
      }, {
        nama: 'Lantamal 12/Pontianak',
        lat: '-0.0263303',
        lng: '109.3425039'
      }, {
        nama: 'Lantamal 13/Tarakan',
        lat: '3.3273599',
        lng: '117.5785049'
      }, {
        nama: 'Lantamal 14/Sorong',
        lat: '-0.8761629',
        lng: '131.255828'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
