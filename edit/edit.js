(function(window, document, $, undefined) {
  'use strict';

  var dropdownFilter = {
    faction: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 11],
    prestigeFaction: [-1, 9, 10],
    bFaction: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	spell: [18, 3, 12, 6, 14, 9, 1, 8, 15, 11, 7, 13, 10, 2, 5, 4, 17],
	goodmercspells: [6, 14, 9, 5, 8, 11, 4, 10, 2],
	evilmercspells: [6, 14, 9, 5, 8, 15, 11, 4, 10, 2],
	neutralmercspells: [6, 14, 9, 5, 8, 11, 4, 13, 10, 2]
  };
  
  var trophyIDs = {
	autocastSeries: [8, 9, 10, 11, 12, 13, 159, 200],
    castSpells: [104000, 104001, 104002, 104003, 104004, 104005, 104006, 104007, 104008, 104009, 104010, 104011, 104012, 104013],
    clickTreasure: [104100, 104101, 104102, 104103, 104104, 104105, 104106, 104107, 104108],
    findFactionCoins: [104500, 104501, 104502, 104503, 104504, 104505, 104506, 104507, 104508, 104509, 104510, 104511, 104512, 104513, 104514, 104515],
    gainCoins: [104600, 104601, 104602, 104603, 104604, 104605, 104606, 104607, 104608, 104609, 104610, 104611, 104612, 104613, 104614, 104615, 104616, 104617, 104618, 104619],
    gainCoinClicking: [104700, 104701, 104702, 104703, 104704, 104705, 104706, 104707, 104708, 104709, 104710, 104711, 104712, 104713, 104714, 104715, 104716, 104717, 104718],
    gainGems: [104900, 104901, 104902, 104903, 104904, 104905, 104906, 104907, 104908, 104909, 104910, 104911, 104912, 104913, 104914, 104915, 104916, 104917, 104918, 104919, 104920, 104921, 104922],
    gainReincarnate: [105000, 105001, 105002, 105003, 105004, 105005, 105006, 105007, 105008, 105009, 105010, 105011, 105012],
    haveAssistants: [105100, 105101, 105102, 105103, 105104, 105105, 105106, 105107, 105108, 105109],
    purchaseUpgrade: [105500, 105501, 105502, 105503, 105504, 105505, 105506, 105507, 105508, 105509, 105510],
    spendMana: [111200, 111201, 111202, 111203, 111204, 111205, 111206, 111207, 111208, 111209],
	gainRubies: [116200, 116201, 116202, 116203],
	giftCollector: [116700, 116701, 116702, 116703],
	snowpile: [116800, 116801, 116802, 116803],
	artifacts: [117000, 117001, 117002, 117003, 117004],
	feelTheLove: [117600, 117601, 117602],
	eggHunter: [119500, 119501, 119502, 119503],
	eggCollection: [119600, 119601, 119602, 119603],
	buildFarmsTrophies: [102300, 102301, 102302, 102303, 102304, 102305, 102306, 102307, 102308, 102309, 102310, 102311, 102312, 102313, 102314, 102315, 102316, 102317, 102318],
	buildInnsTrophies: [102700, 102701, 102702, 102703, 102704, 102705, 102706, 102707, 102708, 102709, 102710, 102711, 102712, 102713, 102714, 102715, 102716, 102717, 102718],
	buildBlacksmithsTrophies: [101600, 101601, 101602, 101603, 101604, 101605, 101606, 101607, 101608, 101609, 101610, 101611, 101612, 101613, 101614, 101615, 101616, 101617, 101618],
	buildWarriorBarracksTrophies: [103700, 103701, 103702, 103703, 103704, 103705, 103706, 103707, 103708, 103709, 103710, 103711, 103712, 103713, 103714, 103715, 103716, 103717, 103718],
	buildKnightsJoustsTrophies: [102900, 102901, 102902, 102903, 102904, 102905, 102906, 102907, 102908, 102909, 102910, 102911, 102912, 102913, 102914, 102915, 102916, 102917, 102918],
	buildWizardTowersTrophies: [103900, 103901, 103902, 103903, 103904, 103905, 103906, 103907, 103908, 103909, 103910, 103911, 103912, 103913, 103914, 103915, 103916, 103917, 103918],
	buildCathedralsTrophies: [101800, 101801, 101802, 101803, 101804, 101805, 101806, 101807, 101808, 101809, 101810, 101811, 101812, 101813, 101814, 101815, 101816, 101817, 101818],
	buildCitadelsTrophies: [101900, 101901, 101902, 101903, 101904, 101905, 101906, 101907, 101908, 101909, 101910, 101911, 101912, 101913, 101914, 101915, 101916, 101917, 101918],
	buildRoyalCastlesTrophies: [103400, 103401, 103402, 103403, 103404, 103405, 103406, 103407, 103408, 103409, 103410, 103411, 103412, 103413, 103414, 103415, 103416, 103417, 103418],
	buildHeavensGatesTrophies: [102500, 102501, 102502, 102503, 102504, 102505, 102506, 102507, 102508, 102509, 102510, 102511, 102512, 102513, 102514, 102515, 102516, 102517, 102518],
	buildSlavePensTrophies: [103500, 103501, 103502, 103503, 103504, 103505, 103506, 103507, 103508, 103509, 103510, 103511, 103512, 103513, 103514, 103515, 103516, 103517, 103518],
	buildOrcishArenasTrophies: [103300, 103301, 103302, 103303, 103304, 103305, 103306, 103307, 103308, 103309, 103310, 103311, 103312, 103313, 103314, 103315, 103316, 103317, 103318],
	buildWitchConclavesTrophies: [103800, 103801, 103802, 103803, 103804, 103805, 103806, 103807, 103808, 103809, 103810, 103811, 103812, 103813, 103814, 103815, 103816, 103817, 103818],
	buildDarkTemplesTrophies: [102000, 102001, 102002, 102003, 102004, 102005, 102006, 102007, 102008, 102009, 102010, 102011, 102012, 102013, 102014, 102015, 102016, 102017, 102018],
	buildNecropolisesTrophies: [103200, 103201, 103202, 103203, 103204, 103205, 103206, 103207, 103208, 103209, 103210, 103211, 103212, 103213, 103214, 103215, 103216, 103217, 103218],
	buildEvilFortressesTrophies: [102200, 102201, 102202, 102203, 102204, 102205, 102206, 102207, 102208, 102209, 102210, 102211, 102212, 102213, 102214, 102215, 102216, 102217, 102218],
	buildHellPortalsTrophies: [102600, 102601, 102602, 102603, 102604, 102605, 102606, 102607, 102608, 102609, 102610, 102611, 102612, 102613, 102614, 102615, 102616, 102617, 102618],
	buildDeepMinesTrophies: [102100, 102101, 102102, 102103, 102104, 102105, 102106, 102107, 102108, 102109, 102110, 102111, 102112, 102113, 102114, 102115, 102116, 102117, 102118],
	buildStonePillarsTrophies: [103600, 103601, 103602, 103603, 103604, 103605, 103606, 103607, 103608, 103609, 103610, 103611, 103612, 103613, 103614, 103615, 103616, 103617, 103618],
	buildAlchemistLabsTrophies: [101400, 101401, 101402, 101403, 101404, 101405, 101406, 101407, 101408, 101409, 101410, 101411, 101412, 101413, 101414, 101415, 101416, 101417, 101418],
	buildMonasteriesTrophies: [103100, 103101, 103102, 103103, 103104, 103105, 103106, 103107, 103108, 103109, 103110, 103111, 103112, 103113, 103114, 103115, 103116, 103117, 103118],
	buildLabyrinthsTrophies: [103000, 103001, 103002, 103003, 103004, 103005, 103006, 103007, 103008, 103009, 103010, 103011, 103012, 103013, 103014, 103015, 103016, 103017, 103018],
	buildIronStrongholdsTrophies: [102800, 102801, 102802, 102803, 102804, 102805, 102806, 102807, 102808, 102809, 102810, 102811, 102812, 102813, 102814, 102815, 102816, 102817, 102818],
	buildAncientPyramidsTrophies: [101500, 101501, 101502, 101503, 101504, 101505, 101506, 101507, 101508, 101509, 101510, 101511, 101512, 101513, 101514, 101515, 101516, 101517, 101518],
	buildHallsOfLegendsTrophies: [102400, 102401, 102402, 102403, 102404, 102405, 102406, 102407, 102408, 102409, 102410, 102411, 102412, 102413, 102414, 102415, 102416, 102417, 102418]
  };
  
  for (var x in trophyIDs) {
	dropdownFilter[x] = trophyIDs[x];
  }

  for (var i in dropdownFilter) {
    var obj = {};
    for (var j of dropdownFilter[i]) {
      obj[j] = true;
    }
    dropdownFilter[i] = obj;
  }

  function controller() {
    this.loadSave = function(dat) {
      try {
        this.save = SaveHandler.Decode(dat);
        console.log('Decoded save:', this.save);
        if (this.save.options[0]) {
          this.save.options = this.save.options[0];
        }
        if (this.save.hasOwnProperty('buyButton')) {
          this.save.options.buyButton = this.save.buyButton;
        }
      } catch(err) {
        console.log(err);
        return;
      }
      View.save = this.save;
    }
  }

  window.Controller = new controller();

  $(function() {

    Vue.filter('filterDef', function(value, attr) {
      if (value == undefined) return value;
      var filtered = [];
      for (i of value) {
        if (i[attr] != undefined) filtered.push(i);
      }
      return filtered;
    });
	
	Vue.component('widget-neutraltime', {
	  template: '<tr>'
	  + '<th>Neutral playtime is not saved; it is calculated in-game.</th>'
	});

    Vue.component('widget-fivestat-header', {
      template: '<tr>'
      + '<th><span class="statheader">Stat</span></th>'
      + '<th><span class="statheader">This Abdication</span></th>'
      + '<th><span class="statheader">Prior Abdications</span></th>'
      + '<th><span class="statheader">This Reincarnation</span></th>'
      + '<th><span class="statheader">Prior Reincarnations</span></th>'
      + '<th><span class="statheader">All Reincarnations</span></th>'
      + '</tr>'
    });

    Vue.component('widget-onestat-header', {
      template: '<tr>'
      + '<th><span class="statheader">Stat</span></th>'
      + '<th><span class="statheader">Value</span></th>'
      + '</tr>'
    });

    Vue.component('widget-factioncoin-header', {
      template: '<tr>'
      + '<th><span class="statheader">Faction</span></th>'
      + '<th><span class="statheader">Faction Coins</span></th>'
      + '<th><span class="statheader">Royal Exchanges</span></th>'
      + '</tr>'
    });
    
    Vue.component('widget-factioncoin', {
      props: ['fc', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><input v-model="fc.factionCoins" number></input></td>'
      + '<td><input v-model="fc.royalExchanges" number></input></td>'
      + '</tr>'
    });
    
    Vue.component('widget-building', {
      props: ['building', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><input v-model="building.q" number></input></td>'
      + '<td><span class="derivedstat">{{building.t - building.q}}</span></td>'
      + '<td><input v-model="building.t" number></input></td>'
      + '<td><input v-model="building.r" number></input></td>'
      + '<td><span class="derivedstat">{{building.r + building.t}}</span></td>'
      + '</tr>'
    });
    
    Vue.component('widget-building-max', {
      props: ['building', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><span class="derivedstat">{{building.q}}</span></td>'
      + '<td><span class="nullstat">&mdash;</span></td>'
      + '<td><input v-model="building.m" number></input></td>'
      + '<td><input v-model="building.e" number></input></td>'
      + '<td><span class="derivedstat">{{total}}</span></td>'
      + '</tr>',
      computed: {
        total: function() {
          return Math.max(this.building.m, this.building.e);
        }
      }
    });
    
    Vue.component('widget-spell', {
      props: ['spell', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><input v-model="spell.c" number></input></td>'
      + '<td><input v-model="spell.r" number></input></td>'
      + '<td><span class="derivedstat">{{spell.c + spell.r}}</span></td>'
      + '<td><input v-model="spell.e" number></input></td>'
      + '<td><span class="derivedstat">{{spell.c + spell.r + spell.e}}</span></td>'
      + '</tr>'
    });
    
    Vue.component('widget-spell-rng', {
      props: ['spell', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><input v-model="spell.s" number></input></td>'
      + '</tr>'
    });

	  Vue.component('widget-spell-time', {
      props: ['spell', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><input v-model="spell.active0" number></input></td>'
      + '<td><input v-model="spell.active1" number></input></td>'
      + '<td><span class="derivedstat">{{spell.active0 + spell.active1}}</span></td>'
      + '<td><input v-model="spell.active2" number></input></td>'
      + '<td><span class="derivedstat">{{spell.active0 + spell.active1 + spell.active2}}</span></td>'
      + '</tr>'
    });
    
    Vue.component('widget-spell-duration', {
      props: ['spell', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><input v-model="spell.t" number></input></td>'
      + '</tr>'
    });
    
    Vue.component('widget-spell-autocasting', {
      props: ['spell', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}} is on Autocasting</span></th>'
      + '<td><input type="checkbox" v-model="spell.a" number></input></td>'
      + '</tr>'
	  + '<tr>'
      + '<th><span class="statname">{{name}} Silver Autocasting Order</span></th>'
      + '<td><input v-model="spell.n" number></input></td>'
      + '</tr>'
	  + '<tr>'
      + '<th><span class="statname">{{name}} Gold Autocasting Order</span></th>'
      + '<td><input v-model="spell.n2" number></input></td>'
      + '</tr>'
	  + '<tr>'
      + '<th><span class="statname">{{name}} Bronze Autocasting Order</span></th>'
      + '<td><input v-model="spell.n3" number></input></td>'
      + '</tr>'
	  });
    
    Vue.component('widget-spell-tiers', {
      props: ['spell', 'name'],
      template: '<tr>'
      + '<th><span class="statname">{{name}} Tiers Bought</span></th>'
      + '<td><input v-model="spell.tierstat1" number></input></td>'
      + '</tr>'
      + '<tr>'
      + '<th><span class="statname">{{name}} Tier Autocasting Level</span></th>'
      + '<td><input v-model="spell.tierstat2" number></input></td>'
      + '</tr>'
    });

    Vue.component('widget-stat', {
      props: {
        stat: Object,
        name: String,
        hideAb: {
          type: Boolean,
          default: function() { return false; }
        },
        hidePrevAbs: {
          type: Boolean,
          default: function() { return false; }
        },
        hideRei: {
          type: Boolean,
          default: function() { return false; }
        },
        hidePrevReis: {
          type: Boolean,
          default: function() { return false; }
        },
        hideTotal: {
          type: Boolean,
          default: function() { return false; }
        }
      },
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td v-show="!hideAb"><input v-model="stat.stats" number></input></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '<td v-show="!hidePrevAbs"><input v-model="stat.statsReset" number></input></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '<td v-show="!hideRei"><span class="derivedstat">{{stat.stats + stat.statsReset}}</span></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '<td v-show="!hidePrevReis"><input v-model="stat.statsRei" number></input></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '<td v-show="!hideTotal"><span class="derivedstat">{{stat.stats + stat.statsReset + stat.statsRei}}</span></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '</tr>'
    });
    
    Vue.component('widget-stat-max', {
      props: {
        stat: Object,
        name: String,
        hideAb: {
          type: Boolean,
          default: function() { return false; }
        },
        hidePrevAbs: {
          type: Boolean,
          default: function() { return false; }
        },
        hideRei: {
          type: Boolean,
          default: function() { return false; }
        },
        hidePrevReis: {
          type: Boolean,
          default: function() { return false; }
        },
        hideTotal: {
          type: Boolean,
          default: function() { return false; }
        }
      },
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td v-show="!hideAb"><input v-model="stat.stats" number></input></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '<td v-show="!hidePrevAbs"><input v-model="stat.statsReset" number></input></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '<td v-show="!hideRei"><span class="derivedstat">{{rei}}</span></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '<td v-show="!hidePrevReis"><input v-model="stat.statsRei" number></input></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '<td v-show="!hideTotal"><span class="derivedstat">{{total}}</span></td>'
      + '<td v-else><span class="nullstat">&mdash;</span></td>'
      + '</tr>',
      computed: {
        rei: function() {
          return Math.max(this.stat.stats, this.stat.statsReset);
        },
        total: function() {
          return Math.max(this.stat.stats, this.stat.statsReset, this.stat.statsRei);
        }
      }
    });
    
    Vue.component('widget-field', {
      props: {
        'field': {},
        'name': String,
        'canEdit': {
          type: Boolean,
          default: function() { return false; }
        },
        'colspan': {
          type: Number,
          default: function() { return 1; }
        }
      },
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td v-show="canEdit" :colspan="colspan"><input v-model="field" number></input></td>'
      + '<td v-else :colspan="colspan"><span class="rawstat">{{field}}</span></td>'
      + '</tr>'
    });
    
    Vue.component('widget-field-dropdown', {
      props: {
        'field': {},
        'name': String,
        'type': String,
        'filter': String
      },
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><select v-model="field" number>'
      + '<option :disabled="option.disabled" :value="option.id" v-for="option in options">{{option.name}}</option>'
      + '</select></td>'
      + '</tr>',
      computed: {
        options: function() {
          var opts = [];
          for (var i of util.assoc[this.type]) {
            if (this.filter && !dropdownFilter[this.filter][i.id]) continue;
            opts.push({
              id: i.id,
              name: i.name,
              //disabled: this.filter && !dropdownFilter[this.filter][i.id]
            });
          }
          return opts;
        }
      }
    });

    Vue.component('widget-upgrade-header', {
      template: '<tr>'
      + '<th><span class="statheader">Name</span></th>'
      + '<th><span class="statheader">Owned</span></th>'
      + '<th><span class="statheader">u1 Boolean</span></th>'
      + '<th><span class="statheader">u3 Boolean</span></th>'
      + '<th><span class="statheader">RNG State</span></th>'
      + '</tr>'
    });

    Vue.component('widget-upgrade', {
  	  props: {
  	    'upgrades': Object,
  	    'name': String,
  	    'id': String
  	  },
      template: '<tr>'
        + '<th><span class="statname">{{name}}</span></th>'
        + '<td><input type="checkbox" v-model="owned" number></input></td>'
        + '<td><input type="checkbox" v-model="upgradeU1" number></input></td>'
        + '<td><input type="checkbox" v-model="upgradeU3" number></input></td>'
        + '<td><input v-model="upgradeRNGstate" number></input></td>'
        + '</tr>',
  	  computed: {
    	owned: {
          get: function() {
      		if (this.upgrades[Number(this.id)]) { return true; }
      		else { return false; }
      	  },
          set: function() {
            if (this.owned) {
              delete this.upgades[Number(this.id)];
            }
            else {
              this.upgrades[Number(this.id)] = {_id: Number(this.id), u1: false, u2: false, u3: false, s: 0};
            }
          }
        },
    	upgradeU1: {
          get: function() {
    	    return this.unlocked && this.upgrades[Number(this.id)].u1;
          },
          set: function(x) {
            if (this.unlocked)
              this.upgrades[Number(this.id)] = [x];
          }
    	},
    	upgradeU3: {
          get: function() {
    	    return this.unlocked && this.upgrades[Number(this.id)].u3;
          },
          set: function(x) {
            if (this.unlocked)
              this.upgrades[Number(this.id)] = [x];
          }
    	},
    	upgradeRNGstate: {
          get: function() {
    	    return this.unlocked && this.upgrades[Number(this.id)].s;
          },
          set: function(x) {
            if (this.unlocked)
              this.upgrades[Number(this.id)] = [x];
          }
    	}
  	  }
    });

    Vue.component('widget-challenge-header', {
      template: '<tr>'
      + '<th><span class="statheader">Name</span></th>'
      + '<th><span class="statheader">Owned</span></th>'
      /*+ '<th><span class="statheader">u1 Boolean</span></th>'
      + '<th><span class="statheader">Inactive</span></th>'
      + '<th><span class="statheader">u3 Boolean</span></th>'
      + '<th><span class="statheader">RNG State</span></th>'*/
      + '</tr>'
    });

    Vue.component('widget-challenge', {
  	  props: {
  	    'upgrades': Object,
  	    'name': String,
  	    'id': String
  	  },
      template: '<tr>'
        + '<th><span class="statname">{{name}}</span></th>'
        + '<td><input type="checkbox" v-model="unlocked" number></input></td>'
        /*+ '<td><input type="checkbox" v-model="upgradeU1" number></input></td>'
        + '<td><input type="checkbox" v-model="upgradeU2" number></input></td>'
        + '<td><input type="checkbox" v-model="upgradeU3" number></input></td>'
        + '<td><input v-model="upgradeRNGstate" number></input></td>'*/
        + '</tr>',
  	  computed: {
    	unlocked: {
          get: function() {
      		if (this.upgrades[Number(this.id)]) { return true; }
      		else { return false; }
      	  },
          set: function() {
            if (this.unlocked) {
              delete this.upgades[Number(this.id)];
            }
            else {
              this.upgrades[Number(this.id)] = {_id: Number(this.id), u1: false, u2: false, u3: false, s: 0};
            }
          }
        }/*,
    	upgradeU1: {
          get: function() {
    	    return this.unlocked && this.upgrades[Number(this.id)].u1;
          },
          set: function(x) {
            if (this.unlocked)
              this.upgrades[Number(this.id)] = [x];
          }
    	},
    	upgradeU2: {
          get: function() {
    	    return this.unlocked && this.upgrades[Number(this.id)].u2;
          },
          set: function(x) {
            if (this.unlocked)
              this.upgrades[Number(this.id)] = [x];
          }
    	},
    	upgradeU3: {
          get: function() {
    	    return this.unlocked && this.upgrades[Number(this.id)].u3;
          },
          set: function(x) {
            if (this.unlocked)
              this.upgrades[Number(this.id)] = [x];
          }
    	},
    	upgradeRNGstate: {
          get: function() {
    	    return this.unlocked && this.upgrades[Number(this.id)].s;
          },
          set: function(x) {
            if (this.unlocked)
              this.upgrades[Number(this.id)] = [x];
          }
    	}*/
  	  }
    });

    Vue.component('widget-research-upgrades-header', {
      template: '<tr>'
      + '<th><span class="statheader">Spellcraft</span></th>'
      + '<th><span class="statheader">Craftsmanship</span></th>'
      + '<th><span class="statheader">Divine</span></th>'
      + '<th><span class="statheader">Economics</span></th>'
      + '<th><span class="statheader">Alchemy</span></th>'
      + '<th><span class="statheader">Warfare</span></th>'
      + '</tr>'
    });

    Vue.component('widget-research-upgrades', {
  	  props: {
  	    'upgrades': Object,
  	    //'name': String,
  	    //'id': String
  	  },
      template: '<tr>'
        + '<td>S1 <input type="checkbox" v-model="S1" number></input></td>'
        + '<td>C1 <input type="checkbox" v-model="C1" number></input></td>'
        + '<td>D1 <input type="checkbox" v-model="D1" number></input></td>'
        + '<td>E1 <input type="checkbox" v-model="E1" number></input></td>'
        + '<td>A1 <input type="checkbox" v-model="A1" number></input></td>'
        + '<td>W1 <input type="checkbox" v-model="W1" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S10 <input type="checkbox" v-model="S10" number></input></td>'
        + '<td>C10 <input type="checkbox" v-model="C10" number></input></td>'
        + '<td>D10 <input type="checkbox" v-model="D10" number></input></td>'
        + '<td>E10 <input type="checkbox" v-model="E10" number></input></td>'
        + '<td>A10 <input type="checkbox" v-model="A10" number></input></td>'
        + '<td>W10 <input type="checkbox" v-model="W10" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S25 <input type="checkbox" v-model="S25" number></input></td>'
        + '<td>C25 <input type="checkbox" v-model="C25" number></input></td>'
        + '<td>D25 <input type="checkbox" v-model="D25" number></input></td>'
        + '<td>E25 <input type="checkbox" v-model="E25" number></input></td>'
        + '<td>A25 <input type="checkbox" v-model="A25" number></input></td>'
        + '<td>W25 <input type="checkbox" v-model="W25" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S30 <input type="checkbox" v-model="S30" number></input></td>'
        + '<td>C30 <input type="checkbox" v-model="C30" number></input></td>'
        + '<td>D30 <input type="checkbox" v-model="D30" number></input></td>'
        + '<td>E30 <input type="checkbox" v-model="E30" number></input></td>'
        + '<td>A30 <input type="checkbox" v-model="A30" number></input></td>'
        + '<td>W30 <input type="checkbox" v-model="W30" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S50 <input type="checkbox" v-model="S50" number></input></td>'
        + '<td>C50 <input type="checkbox" v-model="C50" number></input></td>'
        + '<td>D50 <input type="checkbox" v-model="D50" number></input></td>'
        + '<td>E50 <input type="checkbox" v-model="E50" number></input></td>'
        + '<td>A50 <input type="checkbox" v-model="A50" number></input></td>'
        + '<td>W50 <input type="checkbox" v-model="W50" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S55 <input type="checkbox" v-model="S55" number></input></td>'
        + '<td>C55 <input type="checkbox" v-model="C55" number></input></td>'
        + '<td>D55 <input type="checkbox" v-model="D55" number></input></td>'
        + '<td>E55 <input type="checkbox" v-model="E55" number></input></td>'
        + '<td>A55 <input type="checkbox" v-model="A55" number></input></td>'
        + '<td>W55 <input type="checkbox" v-model="W55" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S80 <input type="checkbox" v-model="S80" number></input></td>'
        + '<td>C80 <input type="checkbox" v-model="C80" number></input></td>'
        + '<td>D80 <input type="checkbox" v-model="D80" number></input></td>'
        + '<td>E80 <input type="checkbox" v-model="E80" number></input></td>'
        + '<td>A80 <input type="checkbox" v-model="A80" number></input></td>'
        + '<td>W80 <input type="checkbox" v-model="W80" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S105 <input type="checkbox" v-model="S105" number></input></td>'
        + '<td>C105 <input type="checkbox" v-model="C105" number></input></td>'
        + '<td>D105 <input type="checkbox" v-model="D105" number></input></td>'
        + '<td>E105 <input type="checkbox" v-model="E105" number></input></td>'
        + '<td>A105 <input type="checkbox" v-model="A105" number></input></td>'
        + '<td>W105 <input type="checkbox" v-model="W105" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S120 <input type="checkbox" v-model="S120" number></input></td>'
        + '<td>C120 <input type="checkbox" v-model="C120" number></input></td>'
        + '<td>D120 <input type="checkbox" v-model="D120" number></input></td>'
        + '<td>E120 <input type="checkbox" v-model="E120" number></input></td>'
        + '<td>A120 <input type="checkbox" v-model="A120" number></input></td>'
        + '<td>W120 <input type="checkbox" v-model="W120" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S135 <input type="checkbox" v-model="S135" number></input></td>'
        + '<td>C135 <input type="checkbox" v-model="C135" number></input></td>'
        + '<td>D135 <input type="checkbox" v-model="D135" number></input></td>'
        + '<td>E135 <input type="checkbox" v-model="E135" number></input></td>'
        + '<td>A135 <input type="checkbox" v-model="A135" number></input></td>'
        + '<td>W135 <input type="checkbox" v-model="W135" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S145 <input type="checkbox" v-model="S145" number></input></td>'
        + '<td>C145 <input type="checkbox" v-model="C145" number></input></td>'
        + '<td>D145 <input type="checkbox" v-model="D145" number></input></td>'
        + '<td>E145 <input type="checkbox" v-model="E145" number></input></td>'
        + '<td>A145 <input type="checkbox" v-model="A145" number></input></td>'
        + '<td>W145 <input type="checkbox" v-model="W145" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S150 <input type="checkbox" v-model="S150" number></input></td>'
        + '<td>C150 <input type="checkbox" v-model="C150" number></input></td>'
        + '<td>D150 <input type="checkbox" v-model="D150" number></input></td>'
        + '<td>E150 <input type="checkbox" v-model="E150" number></input></td>'
        + '<td>A150 <input type="checkbox" v-model="A150" number></input></td>'
        + '<td>W150 <input type="checkbox" v-model="W150" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S175 <input type="checkbox" v-model="S175" number></input></td>'
        + '<td>C175 <input type="checkbox" v-model="C175" number></input></td>'
        + '<td>D175 <input type="checkbox" v-model="D175" number></input></td>'
        + '<td>E175 <input type="checkbox" v-model="E175" number></input></td>'
        + '<td>A175 <input type="checkbox" v-model="A175" number></input></td>'
        + '<td>W175 <input type="checkbox" v-model="W175" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S180 <input type="checkbox" v-model="S180" number></input></td>'
        + '<td>C180 <input type="checkbox" v-model="C180" number></input></td>'
        + '<td>D180 <input type="checkbox" v-model="D180" number></input></td>'
        + '<td>E180 <input type="checkbox" v-model="E180" number></input></td>'
        + '<td>A180 <input type="checkbox" v-model="A180" number></input></td>'
        + '<td>W180 <input type="checkbox" v-model="W180" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S200 <input type="checkbox" v-model="S200" number></input></td>'
        + '<td>C200 <input type="checkbox" v-model="C200" number></input></td>'
        + '<td>D200 <input type="checkbox" v-model="D200" number></input></td>'
        + '<td>E200 <input type="checkbox" v-model="E200" number></input></td>'
        + '<td>A200 <input type="checkbox" v-model="A200" number></input></td>'
        + '<td>W200 <input type="checkbox" v-model="W200" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S205 <input type="checkbox" v-model="S205" number></input></td>'
        + '<td>C205 <input type="checkbox" v-model="C205" number></input></td>'
        + '<td>D205 <input type="checkbox" v-model="D205" number></input></td>'
        + '<td>E205 <input type="checkbox" v-model="E205" number></input></td>'
        + '<td>A205 <input type="checkbox" v-model="A205" number></input></td>'
        + '<td>W205 <input type="checkbox" v-model="W205" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S215 <input type="checkbox" v-model="S215" number></input></td>'
        + '<td>C215 <input type="checkbox" v-model="C215" number></input></td>'
        + '<td>D215 <input type="checkbox" v-model="D215" number></input></td>'
        + '<td>E215 <input type="checkbox" v-model="E215" number></input></td>'
        + '<td>A215 <input type="checkbox" v-model="A215" number></input></td>'
        + '<td>W215 <input type="checkbox" v-model="W215" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S225 <input type="checkbox" v-model="S225" number></input></td>'
        + '<td>C225 <input type="checkbox" v-model="C225" number></input></td>'
        + '<td>D225 <input type="checkbox" v-model="D225" number></input></td>'
        + '<td>E225 <input type="checkbox" v-model="E225" number></input></td>'
        + '<td>A225 <input type="checkbox" v-model="A225" number></input></td>'
        + '<td>W225 <input type="checkbox" v-model="W225" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S230 <input type="checkbox" v-model="S230" number></input></td>'
        + '<td>C230 <input type="checkbox" v-model="C230" number></input></td>'
        + '<td>D230 <input type="checkbox" v-model="D230" number></input></td>'
        + '<td>E230 <input type="checkbox" v-model="E230" number></input></td>'
        + '<td>A230 <input type="checkbox" v-model="A230" number></input></td>'
        + '<td>W230 <input type="checkbox" v-model="W230" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S245 <input type="checkbox" v-model="S245" number></input></td>'
        + '<td>C245 <input type="checkbox" v-model="C245" number></input></td>'
        + '<td>D245 <input type="checkbox" v-model="D245" number></input></td>'
        + '<td>E245 <input type="checkbox" v-model="E245" number></input></td>'
        + '<td>A245 <input type="checkbox" v-model="A245" number></input></td>'
        + '<td>W245 <input type="checkbox" v-model="W245" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S250 <input type="checkbox" v-model="S250" number></input></td>'
        + '<td>C250 <input type="checkbox" v-model="C250" number></input></td>'
        + '<td>D250 <input type="checkbox" v-model="D250" number></input></td>'
        + '<td>E250 <input type="checkbox" v-model="E250" number></input></td>'
        + '<td>A250 <input type="checkbox" v-model="A250" number></input></td>'
        + '<td>W250 <input type="checkbox" v-model="W250" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S251 <input type="checkbox" v-model="S251" number></input></td>'
        + '<td>C251 <input type="checkbox" v-model="C251" number></input></td>'
        + '<td>D251 <input type="checkbox" v-model="D251" number></input></td>'
        + '<td>E251 <input type="checkbox" v-model="E251" number></input></td>'
        + '<td>A251 <input type="checkbox" v-model="A251" number></input></td>'
        + '<td>W251 <input type="checkbox" v-model="W251" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S260 <input type="checkbox" v-model="S260" number></input></td>'
        + '<td>C260 <input type="checkbox" v-model="C260" number></input></td>'
        + '<td>D260 <input type="checkbox" v-model="D260" number></input></td>'
        + '<td>E260 <input type="checkbox" v-model="E260" number></input></td>'
        + '<td>A260 <input type="checkbox" v-model="A260" number></input></td>'
        + '<td>W260 <input type="checkbox" v-model="W260" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S270 <input type="checkbox" v-model="S270" number></input></td>'
        + '<td>C270 <input type="checkbox" v-model="C270" number></input></td>'
        + '<td>D270 <input type="checkbox" v-model="D270" number></input></td>'
        + '<td>E270 <input type="checkbox" v-model="E270" number></input></td>'
        + '<td>A270 <input type="checkbox" v-model="A270" number></input></td>'
        + '<td>W270 <input type="checkbox" v-model="W270" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S275 <input type="checkbox" v-model="S275" number></input></td>'
        + '<td>C275 <input type="checkbox" v-model="C275" number></input></td>'
        + '<td>D275 <input type="checkbox" v-model="D275" number></input></td>'
        + '<td>E275 <input type="checkbox" v-model="E275" number></input></td>'
        + '<td>A275 <input type="checkbox" v-model="A275" number></input></td>'
        + '<td>W275 <input type="checkbox" v-model="W275" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S290 <input type="checkbox" v-model="S290" number></input></td>'
        + '<td>C290 <input type="checkbox" v-model="C290" number></input></td>'
        + '<td>D290 <input type="checkbox" v-model="D290" number></input></td>'
        + '<td>E290 <input type="checkbox" v-model="E290" number></input></td>'
        + '<td>A290 <input type="checkbox" v-model="A290" number></input></td>'
        + '<td>W290 <input type="checkbox" v-model="W290" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S300 <input type="checkbox" v-model="S300" number></input></td>'
        + '<td>C300 <input type="checkbox" v-model="C300" number></input></td>'
        + '<td>D300 <input type="checkbox" v-model="D300" number></input></td>'
        + '<td>E300 <input type="checkbox" v-model="E300" number></input></td>'
        + '<td>A300 <input type="checkbox" v-model="A300" number></input></td>'
        + '<td>W300 <input type="checkbox" v-model="W300" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S305 <input type="checkbox" v-model="S305" number></input></td>'
        + '<td>C305 <input type="checkbox" v-model="C305" number></input></td>'
        + '<td>D305 <input type="checkbox" v-model="D305" number></input></td>'
        + '<td>E305 <input type="checkbox" v-model="E305" number></input></td>'
        + '<td>A305 <input type="checkbox" v-model="A305" number></input></td>'
        + '<td>W305 <input type="checkbox" v-model="W305" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S320 <input type="checkbox" v-model="S320" number></input></td>'
        + '<td>C320 <input type="checkbox" v-model="C320" number></input></td>'
        + '<td>D320 <input type="checkbox" v-model="D320" number></input></td>'
        + '<td>E320 <input type="checkbox" v-model="E320" number></input></td>'
        + '<td>A320 <input type="checkbox" v-model="A320" number></input></td>'
        + '<td>W320 <input type="checkbox" v-model="W320" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S330 <input type="checkbox" v-model="S330" number></input></td>'
        + '<td>C330 <input type="checkbox" v-model="C330" number></input></td>'
        + '<td>D330 <input type="checkbox" v-model="D330" number></input></td>'
        + '<td>E330 <input type="checkbox" v-model="E330" number></input></td>'
        + '<td>A330 <input type="checkbox" v-model="A330" number></input></td>'
        + '<td>W330 <input type="checkbox" v-model="W330" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S340 <input type="checkbox" v-model="S340" number></input></td>'
        + '<td>C340 <input type="checkbox" v-model="C340" number></input></td>'
        + '<td>D340 <input type="checkbox" v-model="D340" number></input></td>'
        + '<td>E340 <input type="checkbox" v-model="E340" number></input></td>'
        + '<td>A340 <input type="checkbox" v-model="A340" number></input></td>'
        + '<td>W340 <input type="checkbox" v-model="W340" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S350 <input type="checkbox" v-model="S350" number></input></td>'
        + '<td>C350 <input type="checkbox" v-model="C350" number></input></td>'
        + '<td>D350 <input type="checkbox" v-model="D350" number></input></td>'
        + '<td>E350 <input type="checkbox" v-model="E350" number></input></td>'
        + '<td>A350 <input type="checkbox" v-model="A350" number></input></td>'
        + '<td>W350 <input type="checkbox" v-model="W350" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S375 <input type="checkbox" v-model="S375" number></input></td>'
        + '<td>C375 <input type="checkbox" v-model="C375" number></input></td>'
        + '<td>D375 <input type="checkbox" v-model="D375" number></input></td>'
        + '<td>E375 <input type="checkbox" v-model="E375" number></input></td>'
        + '<td>A375 <input type="checkbox" v-model="A375" number></input></td>'
        + '<td>W375 <input type="checkbox" v-model="W375" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S400 <input type="checkbox" v-model="S400" number></input></td>'
        + '<td>C400 <input type="checkbox" v-model="C400" number></input></td>'
        + '<td>D400 <input type="checkbox" v-model="D400" number></input></td>'
        + '<td>E400 <input type="checkbox" v-model="E400" number></input></td>'
        + '<td>A400 <input type="checkbox" v-model="A400" number></input></td>'
        + '<td>W400 <input type="checkbox" v-model="W400" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S405 <input type="checkbox" v-model="S405" number></input></td>'
        + '<td>C405 <input type="checkbox" v-model="C405" number></input></td>'
        + '<td>D405 <input type="checkbox" v-model="D405" number></input></td>'
        + '<td>E405 <input type="checkbox" v-model="E405" number></input></td>'
        + '<td>A405 <input type="checkbox" v-model="A405" number></input></td>'
        + '<td>W405 <input type="checkbox" v-model="W405" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S410 <input type="checkbox" v-model="S410" number></input></td>'
        + '<td>C410 <input type="checkbox" v-model="C410" number></input></td>'
        + '<td>D410 <input type="checkbox" v-model="D410" number></input></td>'
        + '<td>E410 <input type="checkbox" v-model="E410" number></input></td>'
        + '<td>A410 <input type="checkbox" v-model="A410" number></input></td>'
        + '<td>W410 <input type="checkbox" v-model="W410" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S435 <input type="checkbox" v-model="S435" number></input></td>'
        + '<td>C435 <input type="checkbox" v-model="C435" number></input></td>'
        + '<td>D435 <input type="checkbox" v-model="D435" number></input></td>'
        + '<td>E435 <input type="checkbox" v-model="E435" number></input></td>'
        + '<td>A435 <input type="checkbox" v-model="A435" number></input></td>'
        + '<td>W435 <input type="checkbox" v-model="W435" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S460 <input type="checkbox" v-model="S460" number></input></td>'
        + '<td>C460 <input type="checkbox" v-model="C460" number></input></td>'
        + '<td>D460 <input type="checkbox" v-model="D460" number></input></td>'
        + '<td>E460 <input type="checkbox" v-model="E460" number></input></td>'
        + '<td>A460 <input type="checkbox" v-model="A460" number></input></td>'
        + '<td>W460 <input type="checkbox" v-model="W460" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S480 <input type="checkbox" v-model="S480" number></input></td>'
        + '<td>C480 <input type="checkbox" v-model="C480" number></input></td>'
        + '<td>D480 <input type="checkbox" v-model="D480" number></input></td>'
        + '<td>E480 <input type="checkbox" v-model="E480" number></input></td>'
        + '<td>A480 <input type="checkbox" v-model="A480" number></input></td>'
        + '<td>W480 <input type="checkbox" v-model="W480" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S495 <input type="checkbox" v-model="S495" number></input></td>'
        + '<td>C495 <input type="checkbox" v-model="C495" number></input></td>'
        + '<td>D495 <input type="checkbox" v-model="D495" number></input></td>'
        + '<td>E495 <input type="checkbox" v-model="E495" number></input></td>'
        + '<td>A495 <input type="checkbox" v-model="A495" number></input></td>'
        + '<td>W495 <input type="checkbox" v-model="W495" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S500 <input type="checkbox" v-model="S500" number></input></td>'
        + '<td>C500 <input type="checkbox" v-model="C500" number></input></td>'
        + '<td>D500 <input type="checkbox" v-model="D500" number></input></td>'
        + '<td>E500 <input type="checkbox" v-model="E500" number></input></td>'
        + '<td>A500 <input type="checkbox" v-model="A500" number></input></td>'
        + '<td>W500 <input type="checkbox" v-model="W500" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S520 <input type="checkbox" v-model="S520" number></input></td>'
        + '<td>C520 <input type="checkbox" v-model="C520" number></input></td>'
        + '<td>D520 <input type="checkbox" v-model="D520" number></input></td>'
        + '<td>E520 <input type="checkbox" v-model="E520" number></input></td>'
        + '<td>A520 <input type="checkbox" v-model="A520" number></input></td>'
        + '<td>W520 <input type="checkbox" v-model="W520" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S525 <input type="checkbox" v-model="S525" number></input></td>'
        + '<td>C525 <input type="checkbox" v-model="C525" number></input></td>'
        + '<td>D525 <input type="checkbox" v-model="D525" number></input></td>'
        + '<td>E525 <input type="checkbox" v-model="E525" number></input></td>'
        + '<td>A525 <input type="checkbox" v-model="A525" number></input></td>'
        + '<td>W525 <input type="checkbox" v-model="W525" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S545 <input type="checkbox" v-model="S545" number></input></td>'
        + '<td>C545 <input type="checkbox" v-model="C545" number></input></td>'
        + '<td>D545 <input type="checkbox" v-model="D545" number></input></td>'
        + '<td>E545 <input type="checkbox" v-model="E545" number></input></td>'
        + '<td>A545 <input type="checkbox" v-model="A545" number></input></td>'
        + '<td>W545 <input type="checkbox" v-model="W545" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S560 <input type="checkbox" v-model="S560" number></input></td>'
        + '<td>C560 <input type="checkbox" v-model="C560" number></input></td>'
        + '<td>D560 <input type="checkbox" v-model="D560" number></input></td>'
        + '<td>E560 <input type="checkbox" v-model="E560" number></input></td>'
        + '<td>A560 <input type="checkbox" v-model="A560" number></input></td>'
        + '<td>W560 <input type="checkbox" v-model="W560" number></input></td>'
        + '</tr>'
        + '<tr>'
        + '<td>S590 <input type="checkbox" v-model="S590" number></input></td>'
        + '<td>C590 <input type="checkbox" v-model="C590" number></input></td>'
        + '<td>D590 <input type="checkbox" v-model="D590" number></input></td>'
        + '<td>E590 <input type="checkbox" v-model="E590" number></input></td>'
        + '<td>A590 <input type="checkbox" v-model="A590" number></input></td>'
        + '<td>W590 <input type="checkbox" v-model="W590" number></input></td>'
        + '</tr>',
  	  computed: {
    	S1: {
          get: function() {
      		if (this.upgrades[130300]) { return this.upgrades[130300].u1; }
      		else { return false; }
      	  },
          set: function() {
            if (this.upgrades[130300]) {
			  if (this.upgrades[130300].u1) { this.upgrades[130300].u1 = false; }
			  else { this.upgrades[130300].u1 = true; }
            }
            else {
              this.upgrades[130300] = {_id: 130300, u1: true, u2: false, u3: false, s: 0};
            }
          }
        }
      }
    });

    Vue.component('widget-trophy-header', {
      template: '<tr>'
      + '<th><span class="statheader">Name</span></th>'
      + '<th><span class="statheader">Owned</span></th>'
      //+ '<th><span class="statheader">u1 Boolean</span></th>'
      + '</tr>'
    });

    Vue.component('widget-trophy', {
  	  props: {
  	    'trophies': Object,
  	    'name': String,
  	    'id': String
  	  },
      template: '<tr>'
        + '<th><span class="statname">{{name}}</span></th>'
        + '<td><input type="checkbox" v-model="unlocked" number></input></td>'
        //+ '<td><input type="checkbox" v-model="trophyU1" number></input></td>'
        + '</tr>',
  	  computed: {
    	unlocked: {
          get: function() {
      		if (this.trophies[Number(this.id)]) { return true; }
      		else { return false; }
      	  },
          set: function() {
            if (this.unlocked) {
              delete this.trophies[Number(this.id)];
            }
            else {
              this.trophies[Number(this.id)] = {_id: Number(this.id), u1: false};
            }
          }
        },
    	trophyU1: {
          get: function() {
    	    return this.unlocked && this.trophies[Number(this.id)].u1;
          },
          set: function(x) {
            if (this.unlocked)
              this.trophies[Number(this.id)] = [x];
          }
    	}
  	  }
    });

    Vue.component('widget-trophy-dropdown', {
      props: {
        'trophies': Object,
        'name': String,
        'type': String,
        'filter': String
      },
      template: '<tr>'
      + '<th><span class="statname">{{name}}</span></th>'
      + '<td><select v-model="unlocked" number>'
      + '<option :disabled="option.disabled" :value="option.id" v-for="option in options">{{option.name}}</option>'
      + '</select></td>'
      + '</tr>',
  	  computed: {
    	unlocked: {
          get: function() {
		    for (var i = this.options.length-2; i >= 0; i--) {
			  if (this.trophies[trophyIDs[this.filter][i]]) {
				return trophyIDs[this.filter][i]
			  }
		    }
           return -1;
      	  },
          set: function(x) {
			for (var i = 0; i < this.options.length-1; i++) {
			  var tid = trophyIDs[this.filter][i];
              if (!this.trophies[tid]) {
				this.trophies[tid] = {_id:tid, u1:false};
              } else {
                if (this.trophies[tid]) delete this.trophies[tid];
			  }
            }
          }
		    },
        options: function() {
          var opts = [{id:-1, name:'None'}];
          for (var i of util.assoc[this.type]) {
            if (this.filter && !dropdownFilter[this.filter][i.id]) continue;
            opts.push({
              id: i.id,
              name: i.name,
              //disabled: this.filter && !dropdownFilter[this.filter][i.id]
            });
          }
          return opts;
        }
      }
    });
	
    Vue.config.debug = true;

    // Initalize Vue
    window.View = new Vue({
      el: '#app',
      data: {
        flavor: {
          intro: 'you shouldn\'t be seeing these',
          title: 'something has gone',
          tagline: 'horribly wrong'
        },
        outputsave: null,
        save: util.save.blankSave(),
        spells: util.assoc.spells,
        factions: util.assoc.faction,
		//upgrades: util.assoc.upgrades,
        currenttime: Math.floor(new Date().getTime()/1000)
      },
      methods: {
        genSave: function(event) {
          this.outputsave = SaveHandler.Encode(this.save);
        },
        updateTime: function(event) { 
          this.currentTime = Math.floor(new Date().getTime()/1000);
        }
      },
      computed: {
        offlinetime: {
          get: function() {
            return this.currenttime - this.save.lastsave;
          },
          set: function(x) {
            this.save.lastsave = this.currenttime - x;
          }
        },
		upgradesArray: {
          get: function() {
		    return this.save.upgrades
          },
          set: function(x) {
            this.save.upgrades[x] = [true];
          }
		},
		trophiesArray: {
          get: function() {
		    return this.save.trophies
          },
          set: function(x) {
            this.save.trophies[x] = [true];
          }
		}
      }
    });
	
    Vue.config.debug = true;

    // Initialize Flavor texts
    Flavor.pageLoaded(View);
    
    // Initialize Bootstrap popovers
    $('[data-toggle="popover"]').popover();

    // Bind Save decoding and parsing
    $('#saveInput').on('paste', function(e) {
      // Empty the input right before the paste comes through
      $(this).val('');
      
      // The timeout ensures we can grab the save right after the paste comes through, without messing with the clipboard
      var self = this;
      setTimeout(function() {
        var saveStr = $(self).val();
        if (saveStr)
          Controller.loadSave(saveStr);
      }, 1);
    }).trigger('focus');
    
    // Bind Re-Enter button to refresh the forecast using the current save string
    $('#doReEnter').on('click', function(e) {
      $('#saveInput').trigger('focus');
      var saveStr = $('#saveInput').val();
      if (saveStr)
        Controller.loadSave(saveStr);
    });
    
    // Bind Copy button to copy the current save string
    $('#doSaveCopy').on('click', function(e) {
      $('#saveInput').trigger('focus');
      var save = $('#saveInput').val();
      window.prompt('Copy to clipboard: Press Ctrl+C, then Enter', save);
    });
    
    // Bind Clear button to clear the save input field
    $('#doSaveClear').on('click', function(e) {
      $('#saveInput').val('').trigger('focus');
    });
    
  });
  
} (window, document, jQuery));
