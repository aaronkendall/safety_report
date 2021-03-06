safetyapp.controller('aircraftTypeCtrl', [ function() {

  var self = this;

  var cessna = ['CS-DXE', 'CS-DXF', 'CS-DXG', 'CS-DXH', 'CS-DXI',
                'CS-DXJ', 'CS-DXK', 'CS-DXL', 'CS-DXM', 'CS-DXN',
                'CS-DXO', 'CS-DXP', 'CS-DXQ', 'CS-DXR', 'CS-DXS',
                'CS-DXT', 'CS-DXU', 'CS-DXV', 'CS-DXW', 'CS-DXX',
                'CS-DXY', 'CS-DXZ', 'CS-DQA', 'CS-DQB'];

  var hawkBeechXpc = ['CS-DRG', 'CS-DRH', 'CS-DRI', 'CS-DRL', 'CS-DRN',
                      'CS-DRO', 'CS-DRP', 'CS-DRQ', 'CS-DRR', 'CS-DRS',
                      'CS-DRT', 'CS-DRU', 'CS-DRV', 'CS-DRW', 'CS-DRX',
                      'CS-DRY', 'CS-DRZ'];

  var hawkBeechSevenFifty = ['CS-DUA', 'CS-DUB', 'CS-DUC', 'CS-DUD', 'CS-DUE',
                             'CS-DUF', 'CS-DUG', 'CS-DUH'];

  var falcon = ['CS-DFD', 'CS-DNR', 'CS-DNS'];

  var falconEasy = ['CS-DFF', 'CS-DFG', 'CS-DFK', 'CS-DLB', 'CS-DLC',
                    'CS-DLD', 'CS-DLE', 'CS-DLF', 'CS-DLG', 'CS-DLH'];

  var falconX = ['CS-DSB', 'CS-DSD'];

  var gulfstream = ['CS-DKD', 'CS-DKE', 'CS-DKF', 'CS-DKG', 'CS-DKH',
                    'CS-DKI', 'CS-DKJ', 'CS-DKK'];

  var bombardierFiveThous = ['CS-TSL'];

  var bombardierSixThous = ['CS-GLA', 'CS-GLB', 'CS-GLC', 'CS-GLD', 'CS-GLE',
                            'CS-GLF'];

  var bombardierThreeFifty = ['CS-GLA', 'CS-GLB', 'CS-GLC'];

  var embraer = ['CS-PHA', 'CS-PHB', 'CS-PHC', 'CS-PHD', 'CS-PHE',
                 'CS-PHF', 'CS-PHG', 'CS-PHH'];

  function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] === obj) {
        return true;
      }
    }
  };

  self.aircraftTypeLoad = function(tail_number) {

    if (contains(cessna, tail_number)) {
      self.aircraft_type = 'CE-560XLS'
    };

    if (contains(hawkBeechXpc, tail_number)) {
      self.aircraft_type = 'HS-125-800XPC'
    };

    if (contains(hawkBeechSevenFifty, tail_number)) {
      self.aircraft_type = 'HS-125-750'
    };

    if (contains(falcon, tail_number)) {
      self.aircraft_type = 'DA-2000'
    };

    if (contains(falconEasy, tail_number)) {
      self.aircraft_type = 'DA-2EASY'
    };

    if (contains(falconX, tail_number)) {
      self.aircraft_type = 'DA-7X'
    };

    if (contains(gulfstream, tail_number)) {
      self.aircraft_type = 'G-550'
    };

    if (contains(bombardierFiveThous, tail_number)) {
      self.aircraft_type = 'GL5000S'
    };

    if (contains(bombardierSixThous, tail_number)) {
      self.aircraft_type = 'GL6000S'
    };

    if (contains(bombardierThreeFifty, tail_number)) {
      self.aircraft_type = 'CL-350S'
    };

    if (contains(embraer, tail_number)) {
      self.aircraft_type = 'EMB-505S'
    };
  }

}])
