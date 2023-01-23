const hashes = {
    "0": "402311",
    "1": "000011",
    "2": "212012",
    "3": "312012",
    "4": "321411",
    "5": "721420",
    "6": "511221",
    "7": "221021",
    "8": "611010",
    "9": "712301",
    "10": "713211",
    "11": "322111",
    "12": "412221",
    "13": "031211",
    "14": "720011",
    "15": "122011",
    "16": "522522",
    "17": "410420",
    "18": "413310",
    "19": "300311",
    "20": "403410",
    "21": "413221",
    "22": "332010",
    "23": "212222",
    "24": "621112",
    "25": "012011",
    "26": "720011",
    "27": "410311",
    "28": "722012",
    "29": "121011",
    "30": "421222",
    "31": "821102",
    "32": "311221",
    "33": "711111",
    "34": "512312",
    "35": "131411",
    "36": "411121",
    "37": "331222",
    "38": "121321",
    "39": "421311",
    "40": "711311",
    "41": "112022",
    "42": "621222",
    "43": "312101",
    "44": "433110",
    "45": "121212",
    "46": "411521",
    "47": "312012",
    "48": "410011",
    "49": "410011",
    "50": "110200",
    "51": "720111",
    "52": "120321",
    "53": "711301",
    "54": "410212",
    "55": "312101",
    "56": "021121",
    "57": "322121",
    "58": "722021",
    "59": "813321",
    "60": "222320",
    "61": "603312",
    "62": "411012",
    "63": "812412",
    "64": "721101",
    "65": "001222",
    "66": "822121",
    "67": "513211",
    "68": "120121",
    "69": "220321",
    "70": "012201",
    "71": "022312",
    "72": "131310",
    "73": "113012",
    "74": "311310",
    "75": "421511",
    "76": "311211",
    "77": "022221",
    "78": "520310",
    "79": "313111",
    "80": "301122",
    "81": "111512",
    "82": "013122",
    "83": "722412",
    "84": "312321",
    "85": "111411",
    "86": "422011",
    "87": "621021",
    "88": "222211",
    "89": "301011",
    "90": "312011",
    "91": "312412",
    "92": "131312",
    "93": "311321",
    "94": "122323",
    "95": "011221",
    "96": "821012",
    "97": "311011",
    "98": "111411",
    "99": "412121",
    "100": "000221",
    "101": "022012",
    "102": "012220",
    "103": "321321",
    "104": "531221",
    "105": "522223",
    "106": "312211",
    "107": "210111",
    "108": "712122",
    "109": "212113",
    "110": "631411",
    "111": "122311",
    "112": "112011",
    "113": "412211",
    "114": "421111",
    "115": "023122",
    "116": "423211",
    "117": "330502",
    "118": "122310",
    "119": "111212",
    "120": "122311",
    "121": "232011",
    "122": "722011",
    "123": "212310",
    "124": "112212",
    "125": "320210",
    "126": "311321",
    "127": "221321",
    "128": "132011",
    "129": "202223",
    "130": "401012",
    "131": "210021",
    "132": "110011",
    "133": "431412",
    "134": "231311",
    "135": "722113",
    "136": "830321",
    "137": "831313",
    "138": "512112",
    "139": "822111",
    "140": "722111",
    "141": "832411",
    "142": "610511",
    "143": "222111",
    "144": "712321",
    "145": "612520",
    "146": "002121",
    "147": "512011",
    "148": "822311",
    "149": "322010",
    "150": "012211",
    "151": "112011",
    "152": "032011",
    "153": "111022",
    "154": "221111",
    "155": "711510",
    "156": "412321",
    "157": "721312",
    "158": "722021",
    "159": "512311",
    "160": "411211",
    "161": "022011",
    "162": "711002",
    "163": "222321",
    "164": "111111",
    "165": "311223",
    "166": "612112",
    "167": "211313",
    "168": "121312",
    "169": "412101",
    "170": "723211",
    "171": "012311",
    "172": "311211",
    "173": "412521",
    "174": "721111",
    "175": "111211",
    "176": "802311",
    "177": "830111",
    "178": "011021",
    "179": "711011",
    "180": "711011",
    "181": "102121",
    "182": "022211",
    "183": "411211",
    "184": "732011",
    "185": "712120",
    "186": "312413",
    "187": "731322",
    "188": "322011",
    "189": "021311",
    "190": "412110",
    "191": "212212",
    "192": "221201",
    "193": "402021",
    "194": "312111",
    "195": "710312",
    "196": "721210",
    "197": "431211",
    "198": "412311",
    "199": "713211",
    "200": "303021",
    "201": "323212",
    "202": "331311",
    "203": "421322",
    "204": "422411",
    "205": "621411",
    "206": "301311",
    "207": "232011",
    "208": "422212",
    "209": "432322",
    "210": "112111",
    "211": "311221",
    "212": "422311",
    "213": "432411",
    "214": "603011",
    "215": "821012",
    "216": "803011",
    "217": "722021",
    "218": "012012",
    "219": "712311",
    "220": "711322",
    "221": "412411",
    "222": "622012",
    "223": "200522",
    "224": "733012",
    "225": "311210",
    "226": "202002",
    "227": "021320",
    "228": "321211",
    "229": "112321",
    "230": "020111",
    "231": "210011",
    "232": "211023",
    "233": "812001",
    "234": "001022",
    "235": "721121",
    "236": "312121",
    "237": "112311",
    "238": "801011",
    "239": "110500",
    "240": "411022",
    "241": "412321",
    "242": "421310",
    "243": "321011",
    "244": "322412",
    "245": "712111",
    "246": "223321",
    "247": "810311",
    "248": "731311",
    "249": "412211",
    "250": "022021",
    "251": "212021",
    "252": "112421",
    "253": "722212",
    "254": "321311",
    "255": "212121",
    "256": "712321",
    "257": "021201",
    "258": "133311",
    "259": "812021",
    "260": "710011",
    "261": "220011",
    "262": "421101",
    "263": "822311",
    "264": "012011",
    "265": "112121",
    "266": "611211",
    "267": "423021",
    "268": "200111",
    "269": "323221",
    "270": "300411",
    "271": "222011",
    "272": "211300",
    "273": "113112",
    "274": "412020",
    "275": "132211",
    "276": "502211",
    "277": "711011",
    "278": "211110",
    "279": "802412",
    "280": "213011",
    "281": "122211",
    "282": "510321",
    "283": "121112",
    "284": "320521",
    "285": "111122",
    "286": "411303",
    "287": "422221",
    "288": "420311",
    "289": "301011",
    "290": "222111",
    "291": "333301",
    "292": "221021",
    "293": "321112",
    "294": "121011",
    "295": "421011",
    "296": "101311",
    "297": "621020",
    "298": "711311",
    "299": "022111",
    "300": "201210",
    "301": "412311",
    "302": "112121",
    "303": "023321",
    "304": "721111",
    "305": "113011",
    "306": "211211",
    "307": "431311",
    "308": "411012",
    "309": "332210",
    "310": "503421",
    "311": "323303",
    "312": "332111",
    "313": "403101",
    "314": "312111",
    "315": "112112",
    "316": "102211",
    "317": "721122",
    "318": "211012",
    "319": "213111",
    "320": "121011",
    "321": "632311",
    "322": "811212",
    "323": "110111",
    "324": "621511",
    "325": "831012",
    "326": "312011",
    "327": "131322",
    "328": "121012",
    "329": "522121",
    "330": "212222",
    "331": "720320",
    "332": "310221",
    "333": "811012",
    "334": "313321",
    "335": "133011",
    "336": "421111",
    "337": "112111",
    "338": "011000",
    "339": "102321",
    "340": "411211",
    "341": "112302",
    "342": "721211",
    "343": "101111",
    "344": "112312",
    "345": "001022",
    "346": "012213",
    "347": "231501",
    "348": "412211",
    "349": "022212",
    "350": "432312",
    "351": "101412",
    "352": "512221",
    "353": "421111",
    "354": "102211",
    "355": "812201",
    "356": "402011",
    "357": "022310",
    "358": "411021",
    "359": "711101",
    "360": "411011",
    "361": "423211",
    "362": "222211",
    "363": "402311",
    "364": "022200",
    "365": "223011",
    "366": "312011",
    "367": "111212",
    "368": "310221",
    "369": "222211",
    "370": "222521",
    "371": "102221",
    "372": "721011",
    "373": "712001",
    "374": "012211",
    "375": "723111",
    "376": "212011",
    "377": "320011",
    "378": "811021",
    "379": "022111",
    "380": "623112",
    "381": "021312",
    "382": "322311",
    "383": "731211",
    "384": "821111",
    "385": "211311",
    "386": "720322",
    "387": "821011",
    "388": "413221",
    "389": "422012",
    "390": "201012",
    "391": "311112",
    "392": "422421",
    "393": "332213",
    "394": "311311",
    "395": "821401",
    "396": "332202",
    "397": "822112",
    "398": "311211",
    "399": "312111",
    "400": "111012",
    "401": "213211",
    "402": "212311",
    "403": "622213",
    "404": "322311",
    "405": "821211",
    "406": "321111",
    "407": "712301",
    "408": "710012",
    "409": "211310",
    "410": "510511",
    "411": "722222",
    "412": "022511",
    "413": "121311",
    "414": "321410",
    "415": "022011",
    "416": "410211",
    "417": "713321",
    "418": "121221",
    "419": "711011",
    "420": "720212",
    "421": "722310",
    "422": "300322",
    "423": "612321",
    "424": "010012",
    "425": "132311",
    "426": "712021",
    "427": "312011",
    "428": "411020",
    "429": "420120",
    "430": "712310",
    "431": "511522",
    "432": "312011",
    "433": "212011",
    "434": "210022",
    "435": "322211",
    "436": "222001",
    "437": "722212",
    "438": "213522",
    "439": "723111",
    "440": "302012",
    "441": "221211",
    "442": "311111",
    "443": "001321",
    "444": "721521",
    "445": "821111",
    "446": "631011",
    "447": "721411",
    "448": "302312",
    "449": "621111",
    "450": "122121",
    "451": "711011",
    "452": "830010",
    "453": "112111",
    "454": "121312",
    "455": "212311",
    "456": "811211",
    "457": "012212",
    "458": "421511",
    "459": "822411",
    "460": "421320",
    "461": "022021",
    "462": "330012",
    "463": "812211",
    "464": "620021",
    "465": "330022",
    "466": "111111",
    "467": "832112",
    "468": "211012",
    "469": "222021"
};
