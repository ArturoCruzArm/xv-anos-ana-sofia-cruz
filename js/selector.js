// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = [
    'imagenes/DJI_20251222_151250_520.webp',
    'imagenes/DJI_20251222_151259_274.webp',
    'imagenes/DJI_20251222_151305_634.webp',
    'imagenes/DJI_20251222_151311_456.webp',
    'imagenes/DJI_20251222_151313_894.webp',
    'imagenes/DJI_20251222_151319_329.webp',
    'imagenes/DJI_20251222_151322_526.webp',
    'imagenes/DJI_20251222_151334_629.webp',
    'imagenes/DJI_20251222_151338_455.webp',
    'imagenes/DJI_20251222_151340_659.webp',
    'imagenes/DJI_20251222_151345_668.webp',
    'imagenes/DJI_20251222_151348_908.webp',
    'imagenes/DJI_20251222_151351_698.webp',
    'imagenes/DJI_20251222_151357_670.webp',
    'imagenes/DJI_20251222_151417_781.webp',
    'imagenes/DJI_20251222_151422_959.webp',
    'imagenes/DJI_20251222_151434_599.webp',
    'imagenes/DJI_20251222_151439_338.webp',
    'imagenes/DJI_20251222_151453_287.webp',
    'imagenes/DJI_20251222_151455_564.webp',
    'imagenes/DJI_20251222_152032_120.webp',
    'imagenes/DJI_20251222_152038_048.webp',
    'imagenes/DJI_20251222_152052_884.webp',
    'imagenes/DJI_20251222_152151_159.webp',
    'imagenes/DJI_20251222_152153_932.webp',
    'imagenes/DJI_20251222_152301_538.webp',
    'imagenes/DJI_20251222_152311_829.webp',
    'imagenes/DJI_20251222_152318_338.webp',
    'imagenes/DJI_20251222_152321_534.webp',
    'imagenes/DJI_20251222_152324_128.webp',
    'imagenes/DJI_20251222_152326_813.webp',
    'imagenes/DJI_20251222_152331_807.webp',
    'imagenes/DJI_20251222_152336_024.webp',
    'imagenes/DJI_20251222_152350_903.webp',
    'imagenes/DJI_20251222_152401_073.webp',
    'imagenes/DJI_20251222_160053_627.webp',
    'imagenes/DJI_20251222_160057_414.webp',
    'imagenes/DJI_20251222_160100_099.webp',
    'imagenes/DJI_20251222_160102_725.webp',
    'imagenes/DJI_20251222_160105_061.webp',
    'imagenes/DJI_20251222_160107_899.webp',
    'imagenes/DJI_20251222_160110_600.webp',
    'imagenes/DJI_20251222_160113_480.webp',
    'imagenes/DJI_20251222_160116_238.webp',
    'imagenes/DJI_20251222_160119_150.webp',
    'imagenes/DJI_20251222_160123_064.webp',
    'imagenes/DJI_20251222_160219_960.webp',
    'imagenes/DJI_20251222_160249_657.webp',
    'imagenes/DJI_20251222_160252_810.webp',
    'imagenes/DJI_20251222_160255_146.webp',
    'imagenes/DJI_20251222_160257_621.webp',
    'imagenes/DJI_20251222_160300_067.webp',
    'imagenes/DJI_20251222_160302_152.webp',
    'imagenes/DJI_20251222_160307_989.webp',
    'imagenes/DJI_20251222_160310_416.webp',
    'imagenes/DJI_20251222_160334_689.webp',
    'imagenes/DJI_20251222_160344_199.webp',
    'imagenes/DJI_20251222_160347_305.webp',
    'imagenes/DJI_20251222_160349_670.webp',
    'imagenes/DJI_20251222_161118_241.webp',
    'imagenes/DJI_20251222_161121_631.webp',
    'imagenes/DJI_20251222_161125_487.webp',
    'imagenes/DJI_20251222_161128_322.webp',
    'imagenes/DJI_20251222_161130_403.webp',
    'imagenes/DJI_20251222_161133_811.webp',
    'imagenes/DJI_20251222_161140_111.webp',
    'imagenes/DJI_20251222_161142_360.webp',
    'imagenes/DJI_20251222_161152_261.webp',
    'imagenes/DJI_20251222_161155_383.webp',
    'imagenes/DJI_20251222_161200_539.webp',
    'imagenes/DJI_20251222_161203_992.webp',
    'imagenes/DJI_20251222_161207_261.webp',
    'imagenes/DJI_20251222_161213_622.webp',
    'imagenes/DJI_20251222_161215_870.webp',
    'imagenes/DJI_20251222_161218_436.webp',
    'imagenes/DJI_20251222_161223_162.webp',
    'imagenes/DJI_20251222_161500_903.webp',
    'imagenes/DJI_20251222_161513_218.webp',
    'imagenes/DJI_20251222_161519_684.webp',
    'imagenes/DJI_20251222_161704_638.webp',
    'imagenes/DJI_20251222_161714_478.webp',
    'imagenes/DJI_20251222_161723_223.webp',
    'imagenes/DJI_20251222_161727_439.webp',
    'imagenes/DJI_20251222_161731_744.webp',
    'imagenes/DJI_20251222_162119_412.webp',
    'imagenes/DJI_20251222_162121_706.webp',
    'imagenes/DJI_20251222_162125_429.webp',
    'imagenes/DJI_20251222_162129_390.webp',
    'imagenes/DJI_20251222_162133_078.webp',
    'imagenes/DJI_20251222_162232_358.webp',
    'imagenes/DJI_20251222_162314_660.webp',
    'imagenes/DJI_20251222_162317_734.webp',
    'imagenes/DJI_20251222_162324_739.webp',
    'imagenes/DJI_20251222_162326_807.webp',
    'imagenes/DJI_20251222_162336_455.webp',
    'imagenes/DJI_20251222_162340_161.webp',
    'imagenes/DJI_20251222_162344_162.webp',
    'imagenes/DJI_20251222_162349_415.webp',
    'imagenes/DJI_20251222_162426_046.webp',
    'imagenes/DJI_20251222_162429_481.webp',
    'imagenes/DJI_20251222_162433_260.webp',
    'imagenes/DJI_20251222_162435_418.webp',
    'imagenes/DJI_20251222_162444_766.webp',
    'imagenes/DJI_20251222_162448_080.webp',
    'imagenes/DJI_20251222_162450_749.webp',
    'imagenes/DJI_20251222_162453_539.webp',
    'imagenes/DJI_20251222_162456_870.webp',
    'imagenes/DJI_20251222_162459_839.webp',
    'imagenes/DJI_20251222_162502_524.webp',
    'imagenes/DJI_20251222_162504_921.webp',
    'imagenes/DJI_20251222_162506_902.webp',
    'imagenes/DJI_20251222_162528_641.webp',
    'imagenes/DJI_20251222_162534_234.webp',
    'imagenes/DJI_20251222_162537_534.webp',
    'imagenes/DJI_20251222_162544_177.webp',
    'imagenes/DJI_20251222_162546_141.webp',
    'imagenes/DJI_20251222_162601_910.webp',
    'imagenes/DJI_20251222_162616_189.webp',
    'imagenes/DJI_20251222_162622_055.webp',
    'imagenes/DJI_20251222_162624_242.webp',
    'imagenes/DJI_20251222_162638_838.webp',
    'imagenes/DJI_20251222_162701_533.webp',
    'imagenes/DJI_20251222_162704_174.webp',
    'imagenes/DJI_20251222_163031_957.webp',
    'imagenes/DJI_20251222_163041_616.webp',
    'imagenes/DJI_20251222_163046_026.webp',
    'imagenes/DJI_20251222_163048_423.webp',
    'imagenes/DJI_20251222_163050_959.webp',
    'imagenes/DJI_20251222_163054_108.webp',
    'imagenes/DJI_20251222_163058_792.webp',
    'imagenes/DJI_20251222_163103_202.webp',
    'imagenes/DJI_20251222_163110_132.webp',
    'imagenes/DJI_20251222_163112_243.webp',
    'imagenes/DJI_20251222_163115_111.webp',
    'imagenes/DJI_20251222_163216_567.webp',
    'imagenes/DJI_20251222_163222_732.webp',
    'imagenes/DJI_20251222_163226_408.webp',
    'imagenes/DJI_20251222_163230_172.webp',
    'imagenes/DJI_20251222_163234_371.webp',
    'imagenes/DJI_20251222_163236_559.webp',
    'imagenes/DJI_20251222_163241_347.webp',
    'imagenes/DJI_20251222_163433_860.webp',
    'imagenes/DJI_20251222_163443_152.webp',
    'imagenes/DJI_20251222_163457_690.webp',
    'imagenes/DJI_20251222_163520_595.webp',
    'imagenes/DJI_20251222_163523_651.webp',
    'imagenes/DJI_20251222_163526_577.webp',
    'imagenes/DJI_20251222_163622_424.webp',
    'imagenes/DJI_20251222_163624_581.webp',
    'imagenes/DJI_20251222_163626_981.webp',
    'imagenes/DJI_20251222_163631_276.webp',
    'imagenes/DJI_20251222_163642_028.webp',
    'imagenes/DJI_20251222_163644_368.webp',
    'imagenes/DJI_20251222_163703_376.webp',
    'imagenes/DJI_20251222_163706_044.webp',
    'imagenes/DJI_20251222_163710_202.webp',
    'imagenes/DJI_20251222_163715_533.webp',
    'imagenes/DJI_20251222_163717_548.webp',
    'imagenes/DJI_20251222_163721_270.webp',
    'imagenes/DJI_20251222_163821_857.webp',
    'imagenes/DJI_20251222_163828_425.webp',
    'imagenes/DJI_20251222_163830_357.webp',
    'imagenes/DJI_20251222_163833_495.webp',
    'imagenes/DJI_20251222_163837_908.webp',
    'imagenes/DJI_20251222_163842_227.webp',
    'imagenes/DJI_20251222_163844_972.webp',
    'imagenes/DJI_20251222_163853_837.webp',
    'imagenes/DJI_20251222_163856_597.webp',
    'imagenes/DJI_20251222_163900_857.webp',
    'imagenes/DJI_20251222_163906_047.webp',
    'imagenes/DJI_20251222_164024_870.webp',
    'imagenes/DJI_20251222_164036_074.webp',
    'imagenes/DJI_20251222_171905_787.webp',
    'imagenes/DJI_20251222_171911_276.webp',
    'imagenes/DJI_20251222_171916_899.webp',
    'imagenes/DJI_20251222_171919_675.webp',
    'imagenes/DJI_20251222_171922_705.webp',
    'imagenes/DJI_20251222_171927_342.webp',
    'imagenes/DJI_20251222_171944_455.webp',
    'imagenes/DJI_20251222_171956_726.webp',
    'imagenes/DJI_20251222_171958_657.webp',
    'imagenes/DJI_20251222_172000_820.webp',
    'imagenes/DJI_20251222_172009_775.webp',
    'imagenes/DJI_20251222_172014_726.webp',
    'imagenes/DJI_20251222_172021_942.webp',
    'imagenes/DJI_20251222_172027_177.webp',
    'imagenes/DJI_20251222_172029_833.webp',
    'imagenes/DJI_20251222_172032_154.webp',
    'imagenes/DJI_20251222_172035_607.webp',
    'imagenes/DJI_20251222_172041_502.webp',
    'imagenes/DJI_20251222_172044_081.webp',
    'imagenes/DJI_20251222_172427_611.webp',
    'imagenes/DJI_20251222_172436_400.webp',
    'imagenes/DJI_20251222_172439_266.webp',
    'imagenes/DJI_20251222_172441_422.webp',
    'imagenes/DJI_20251222_172443_749.webp',
    'imagenes/DJI_20251222_172446_465.webp',
    'imagenes/DJI_20251222_172448_742.webp',
    'imagenes/DJI_20251222_172454_670.webp',
    'imagenes/DJI_20251222_172459_531.webp',
    'imagenes/DJI_20251222_172503_822.webp',
    'imagenes/DJI_20251222_172508_217.webp',
    'imagenes/DJI_20251222_172510_599.webp',
    'imagenes/DJI_20251222_172512_714.webp',
    'imagenes/DJI_20251222_172514_874.webp',
    'imagenes/DJI_20251222_172517_589.webp',
    'imagenes/DJI_20251222_172521_402.webp',
    'imagenes/DJI_20251222_172524_267.webp',
    'imagenes/DJI_20251222_172540_374.webp',
    'imagenes/DJI_20251222_172543_990.webp',
    'imagenes/DJI_20251222_172546_447.webp',
    'imagenes/DJI_20251222_172614_171.webp',
    'imagenes/DJI_20251222_172618_250.webp',
    'imagenes/DJI_20251222_172620_364.webp',
    'imagenes/DJI_20251222_172624_433.webp',
    'imagenes/DJI_20251222_172627_388.webp',
    'imagenes/DJI_20251222_172632_996.webp',
    'imagenes/DJI_20251222_172642_914.webp',
    'imagenes/DJI_20251222_172724_599.webp',
    'imagenes/DJI_20251222_172729_896.webp',
    'imagenes/DJI_20251222_172734_184.webp',
    'imagenes/DJI_20251222_172736_283.webp',
    'imagenes/DJI_20251222_172738_895.webp',
    'imagenes/DJI_20251222_172955_212.webp',
    'imagenes/DJI_20251222_173000_062.webp',
    'imagenes/DJI_20251222_173002_354.webp',
    'imagenes/DJI_20251222_173004_800.webp',
    'imagenes/DJI_20251222_173007_124.webp',
    'imagenes/DJI_20251222_173009_855.webp',
    'imagenes/DJI_20251222_173013_441.webp',
    'imagenes/DJI_20251222_173015_927.webp',
    'imagenes/DJI_20251222_173019_951.webp',
    'imagenes/DJI_20251222_173022_560.webp',
    'imagenes/DJI_20251222_173024_854.webp',
    'imagenes/DJI_20251222_173030_857.webp',
    'imagenes/DJI_20251222_173033_541.webp',
    'imagenes/DJI_20251222_173036_465.webp',
    'imagenes/DJI_20251222_173039_467.webp',
    'imagenes/DJI_20251222_173042_677.webp',
    'imagenes/DJI_20251222_173045_662.webp',
    'imagenes/DJI_20251222_173049_470.webp',
    'imagenes/DJI_20251222_173051_719.webp',
    'imagenes/DJI_20251222_173053_697.webp',
    'imagenes/DJI_20251222_173227_317.webp',
    'imagenes/DJI_20251222_173231_229.webp',
    'imagenes/DJI_20251222_173236_525.webp',
    'imagenes/DJI_20251222_173238_924.webp',
    'imagenes/DJI_20251222_173241_249.webp',
    'imagenes/DJI_20251222_173243_169.webp',
    'imagenes/DJI_20251222_173245_147.webp',
    'imagenes/DJI_20251222_173248_240.webp',
    'imagenes/DJI_20251222_173255_769.webp',
    'imagenes/DJI_20251222_173259_277.webp',
    'imagenes/DJI_20251222_173304_698.webp',
    'imagenes/DJI_20251222_173312_645.webp',
    'imagenes/DJI_20251222_173318_017.webp',
    'imagenes/DJI_20251222_173329_985.webp',
    'imagenes/DJI_20251222_173332_248.webp',
    'imagenes/DJI_20251222_173334_918.webp',
    'imagenes/DJI_20251222_173337_950.webp',
    'imagenes/DJI_20251222_173340_440.webp',
    'imagenes/DJI_20251222_173343_830.webp',
    'imagenes/DJI_20251222_173349_578.webp',
    'imagenes/DJI_20251222_173352_139.webp',
    'imagenes/DJI_20251222_173354_435.webp',
    'imagenes/DJI_20251222_173356_850.webp',
    'imagenes/DJI_20251222_173413_772.webp',
    'imagenes/DJI_20251222_173416_395.webp',
    'imagenes/DJI_20251222_173419_875.webp',
    'imagenes/DJI_20251222_173422_125.webp',
    'imagenes/DJI_20251222_173436_856.webp',
    'imagenes/DJI_20251222_173440_594.webp',
    'imagenes/DJI_20251222_173447_029.webp',
    'imagenes/DJI_20251222_173450_869.webp',
    'imagenes/DJI_20251222_173456_268.webp',
    'imagenes/DJI_20251222_173501_278.webp',
    'imagenes/DJI_20251222_173503_644.webp',
    'imagenes/DJI_20251222_173618_439.webp',
    'imagenes/DJI_20251222_173627_527.webp',
    'imagenes/DJI_20251222_173653_358.webp',
    'imagenes/DJI_20251222_173659_266.webp',
    'imagenes/DJI_20251222_173702_388.webp',
    'imagenes/DJI_20251222_173721_123.webp',
    'imagenes/DJI_20251222_173723_672.webp',
    'imagenes/DJI_20251222_173726_914.webp',
    'imagenes/DJI_20251222_173730_709.webp',
    'imagenes/DJI_20251222_175634_273.webp',
    'imagenes/DJI_20251222_175636_447.webp',
    'imagenes/DJI_20251222_175639_345.webp',
    'imagenes/DJI_20251222_175644_805.webp',
    'imagenes/DJI_20251222_175649_725.webp',
    'imagenes/DJI_20251222_175652_167.webp',
    'imagenes/DJI_20251222_175720_441.webp',
    'imagenes/DJI_20251222_175724_043.webp',
    'imagenes/DJI_20251222_175726_186.webp',
    'imagenes/DJI_20251222_175730_026.webp',
    'imagenes/DJI_20251222_175734_843.webp',
    'imagenes/DJI_20251222_175738_640.webp',
    'imagenes/DJI_20251222_175740_903.webp',
    'imagenes/DJI_20251222_175803_451.webp',
    'imagenes/DJI_20251222_175808_461.webp',
    'imagenes/DJI_20251222_175811_203.webp',
    'imagenes/DJI_20251222_175817_759.webp',
    'imagenes/DJI_20251222_175820_548.webp',
    'imagenes/DJI_20251222_175827_016.webp',
    'imagenes/DJI_20251222_175829_412.webp',
    'imagenes/DJI_20251222_180015_467.webp',
    'imagenes/DJI_20251222_180020_763.webp',
    'imagenes/DJI_20251222_180031_636.webp',
    'imagenes/DJI_20251222_180037_365.webp',
    'imagenes/DJI_20251222_180041_418.webp',
    'imagenes/DJI_20251222_180044_972.webp',
    'imagenes/DJI_20251222_180048_572.webp',
    'imagenes/DJI_20251222_180051_060.webp',
    'imagenes/DJI_20251222_180053_384.webp',
    'imagenes/DJI_20251222_180058_112.webp',
    'imagenes/DJI_20251222_180100_963.webp',
    'imagenes/DJI_20251222_180134_141.webp',
    'imagenes/DJI_20251222_180137_833.webp',
    'imagenes/DJI_20251222_180140_321.webp',
    'imagenes/DJI_20251222_180303_935.webp',
    'imagenes/DJI_20251222_180307_324.webp',
    'imagenes/DJI_20251222_180309_888.webp',
    'imagenes/DJI_20251222_180312_467.webp',
    'imagenes/DJI_20251222_180529_541.webp',
    'imagenes/DJI_20251222_180534_264.webp',
    'imagenes/DJI_20251222_180536_499.webp',
    'imagenes/DJI_20251222_180544_241.webp',
    'imagenes/DJI_20251222_180547_104.webp',
    'imagenes/DJI_20251222_180549_594.webp',
    'imagenes/DJI_20251222_180552_806.webp',
    'imagenes/DJI_20251222_180555_805.webp',
    'imagenes/DJI_20251222_180558_896.webp',
    'imagenes/DJI_20251222_180601_309.webp',
    'imagenes/DJI_20251222_180821_219.webp',
    'imagenes/DJI_20251222_180824_277.webp',
    'imagenes/DJI_20251222_180829_004.webp',
    'imagenes/DJI_20251222_180832_770.webp',
    'imagenes/DJI_20251222_180838_455.webp',
    'imagenes/DJI_20251222_180843_390.webp',
    'imagenes/DJI_20251222_180845_635.webp',
    'imagenes/DJI_20251222_180855_584.webp',
    'imagenes/DJI_20251222_180915_443.webp',
    'imagenes/DJI_20251222_180919_177.webp',
    'imagenes/DJI_20251222_180927_954.webp',
    'imagenes/DJI_20251222_180931_855.webp',
    'imagenes/DJI_20251222_180941_886.webp',
    'imagenes/DJI_20251222_180944_483.webp',
    'imagenes/DJI_20251222_181247_950.webp',
    'imagenes/DJI_20251222_181252_092.webp',
    'imagenes/DJI_20251222_181254_279.webp',
    'imagenes/DJI_20251222_181257_282.webp',
    'imagenes/DJI_20251222_181259_692.webp',
    'imagenes/DJI_20251222_181302_830.webp',
    'imagenes/DJI_20251222_181306_987.webp',
    'imagenes/DJI_20251222_181312_699.webp',
    'imagenes/DJI_20251222_181315_685.webp',
    'imagenes/DJI_20251222_181319_468.webp',
    'imagenes/DJI_20251222_181323_034.webp',
    'imagenes/DJI_20251222_181327_493.webp',
    'imagenes/DJI_20251222_181330_143.webp',
    'imagenes/DJI_20251222_181334_826.webp',
    'imagenes/DJI_20251222_181338_934.webp',
    'imagenes/DJI_20251222_181354_265.webp',
    'imagenes/DJI_20251222_181358_333.webp',
    'imagenes/DJI_20251222_181408_367.webp',
    'imagenes/DJI_20251222_182548_868.webp',
    'imagenes/DJI_20251222_182604_619.webp',
    'imagenes/DJI_20251222_182614_063.webp',
    'imagenes/DJI_20251222_182629_010.webp',
    'imagenes/DJI_20251222_182631_094.webp',
    'imagenes/DJI_20251222_182634_287.webp',
];

const STORAGE_KEY = 'xv_anos_ana_sofia_photo_selections';
const LIMITES = {
    ampliacion: 1,
    impresion: 100,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    // Actualizar contadores con indicadores de límite
    document.getElementById('countAmpliacion').textContent =
        LIMITES.ampliacion ? `${stats.ampliacion}/${LIMITES.ampliacion}` : stats.ampliacion;
    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    // Agregar clases de advertencia si se exceden los límites
    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#f44336';
            ampliacionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.ampliacion === LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#4caf50';
            ampliacionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            ampliacionCard.style.borderColor = '';
            ampliacionCard.style.backgroundColor = '';
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#f44336';
            impresionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún. Por favor, sube las fotos al directorio imagenes/</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años - Ana Sofía Cruz Pérez',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-anos-ainhoa-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '🎉 SELECCIÓN DE FOTOS - XV AÑOS ANA SOFÍA CRUZ PÉREZ\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   🖼️  Ampliación requerida: ${LIMITES.ampliacion} foto\n`;
    summary += `   📸 Impresión requerida: ${LIMITES.impresion} fotos\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}/${LIMITES.ampliacion} ${stats.ampliacion === LIMITES.ampliacion ? '✓' : stats.ampliacion > LIMITES.ampliacion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons con validación de límites
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            // Si está intentando seleccionar (no deseleccionar)
            if (!isCurrentlySelected) {
                const stats = getStats();

                // Validar límites
                if (category === 'ampliacion' && stats.ampliacion >= LIMITES.ampliacion) {
                    // Verificar si esta foto ya tiene ampliación seleccionada
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.ampliacion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.ampliacion} foto(s) para ampliación. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }

                if (category === 'impresion' && stats.impresion >= LIMITES.impresion) {
                    // Verificar si esta foto ya tiene impresión seleccionada
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.impresion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.impresion} fotos para impresión. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }
            }

            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Navigation button event listeners
    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
    console.log('Selecciones cargadas:', photoSelections);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
