export const TYPES = {
  //#region DBConnectionManager
  DBConnectionManager: Symbol.for("DBConnectionManager"),
  //#endregions

  //#region DBConnectionManagerIntranet
  DBConnectionManagerIntranet: Symbol.for("DBConnectionManagerIntranet"),
  //#endregions

  //#region Deposit
  DepositRepository: Symbol.for("DepositRepository"),
  DepositAdapter: Symbol.for("DepositAdapter"),
  DepositUseCase: Symbol.for("DepositUseCase"),
  DepositMapperService: Symbol.for("DepositMapperService"),
  //#endregion

  //#region CatGift
  GiftRepository: Symbol.for("GiftRepository"),
  GiftAdapter: Symbol.for("GiftAdapter"),
  GiftMapperService: Symbol.for("GiftMapperService"),
  //#endregion

  //#region Couple
  CoupleRepository: Symbol.for("CoupleRepository"),
  CoupleAdapter: Symbol.for("CoupleAdapter"),
  CoupleUseCase: Symbol.for("CoupleUseCase"),
  CoupleMapperService: Symbol.for("CoupleMapperService"),
  CoupleUpdateMapperService: Symbol.for("CoupleUpdateMapperService"),
  CoupleCreateMapperService: Symbol.for("CoupleCreateMapperService"),
  CoupleFindAllMapperService: Symbol.for("CoupleFindAllMapperService"),

  // inhouse
  CoupleInhouseRepository: Symbol.for("CoupleInhouseRepository"),
  CoupleInhouseUseCase: Symbol.for("CoupleInhouseUseCase"),
  CoupleInhouseAdapter: Symbol.for("CoupleInhouseAdapter"),
  CoupleInhosueMapperService: Symbol.for("CoupleInhosueMapperService"),
  CoupleFindAllInhouseMapperService: Symbol.for("CoupleFindAllInhouseMapperService"),
  CoupleCreateInhouseMapperService: Symbol.for("CoupleCreateInhouseMapperService"),
  CoupleUpdateInhouseMapperService: Symbol.for("CoupleUpdateInhouseMapperService"),
  
  // Hostess
  CoupleHostessRepository: Symbol.for("CoupleHostessRepository"),
  CoupleHostessAdapter: Symbol.for("CoupleHostessAdapter"),
  CoupleHostessUseCase: Symbol.for("CoupleHostessUseCase"),
  CoupleHostessMapperService: Symbol.for("CoupleHostessMapperService"),
  CoupleFindAllHostessMapperService: Symbol.for("CoupleFindAllHossstessMapperService"),
  CoupleUpdateHostessMapperService: Symbol.for("CoupleUpdateHostessMapperService"),
  //#endregion

  //#region CoupleStatus
  CoupleStatusRepository: Symbol.for("CoupleStatusRepository"),
  CoupleStatusAdapter: Symbol.for("CoupleStatusAdapter"),
  CoupleStatusMapperService: Symbol.for("CoupleStatusMapperService"),
  //#endregion

  //#region Invitations
  InvitationsRepository: Symbol.for("InvitationsRepository"),
  InvitationsAdapter: Symbol.for("InvitationsAdapter"),
  InvitationsUseCase: Symbol.for("InvitationsUseCase"),
  InvitationsMapperService: Symbol.for("InvitationsMapperService"),
  HostessInvitationMapperService: Symbol.for("HostessInvitationMapperService"),
  OuthouseInvitationRepository: Symbol.for("OuthouseInvitationRepository"),
  OuthouseInvitationAdapter: Symbol.for("OuthouseInvitationAdapter"),
  OuthouseInvitationUseCase: Symbol.for("OuthouseInvitationUseCase"),
  InhouseInvitationRepository: Symbol.for("InhouseInvitationRepository"),
  InhouseInvitationAdapter: Symbol.for("InhouseInvitationAdapter"),
  InhouseInvitationUseCase: Symbol.for("InhouseInvitationUseCase"),
  //#endregion

  //#region Person
  PersonRepository: Symbol.for("PersonRepository"),
  PersonAdapter: Symbol.for("PersonAdapter"),
  //#endregion

  //#region Hotel
  HotelRepository: Symbol.for("HotelRepository"),
  HotelAdapter: Symbol.for("HotelAdapter"),
  CountryMapperService: Symbol.for("CountryMapperService"),
  //#endregion

  //#region Country
  CountryRepository: Symbol.for("CountryRepository"),
  CountryAdapter: Symbol.for("CountryAdapter"),
  HotelMapperService: Symbol.for("HotelMapperService"),
  //#endregion

  //#region Agency
  AgencyRepository: Symbol.for("AgencyRepository"),
  AgencyAdapter: Symbol.for("AgencyAdapter"),
  AgencyMapperService: Symbol.for("AgencyMapperService"),
  //#endregion

  //#region Market
  MarketRepository: Symbol.for("MarketRepository"),
  MarketAdapter: Symbol.for("MarketAdapter"),
  //#endregion

  //#region Language
  LanguageRepository: Symbol.for("LanguageRepository"),
  LanguageAdapter: Symbol.for("LanguageAdapter"),
  LanguageMapperService: Symbol.for("LanguageMapperService"),
  //#endregion

  //#region Idiosyncrasy
  IdiosyncrasyRepository: Symbol.for("IdiosyncrasyRepository"),
  IdiosyncrasyAdapter: Symbol.for("IdiosyncrasyAdapter"),
  IdiosyncrasyMapperService: Symbol.for("IdiosyncrasyMapperService"),
  //#endregion

  //#region GiftByCouple
  GiftByCoupleRepository: Symbol.for("GiftByCoupleRepository"),
  GiftByCoupleAdapter: Symbol.for("GiftByCoupleAdapter"),
  //#endregion

  //#region SalesRoom
  SalesRoomRepository: Symbol.for("SalesRoomRepository"),
  SalesRoomAdapter: Symbol.for("SalesRoomAdapter"),
  //#endregion

  //#region MaritalStatus
  MaritalStatusRepository: Symbol.for("MaritalStatusRepository"),
  MaritalStatusAdapter: Symbol.for("MaritalStatusAdapter"),
  MaritalStatusMapperService: Symbol.for("MartialStatusMapperService"),
  //#endregion

  //#region Occupation
  OccupationRepository: Symbol.for("OccupationRepository"),
  OccupationAdapter: Symbol.for("OccupationAdapter"),
  OccupationMapperService: Symbol.for("OccupationMapperService"),
  //#endregion

  //#region AvailableHour
  AvailableHourRepository: Symbol.for("AvailableHourRepository"),
  AvailableHourAdapter: Symbol.for("AvailableHourAdapter"),
  //#endregion

  //#region AvailableHour
  AllotmentRepository: Symbol.for("AllotmentRepository"),
  AllotmentAdapter: Symbol.for("AllotmentAdapter"),
  InhouseAllotmentAdapter: Symbol.for("InhouseAllotmentAdapter"),
  //#endregion

  //#region OPC
  OPCRepository: Symbol.for("OPCRepository"),
  OPCAdapter: Symbol.for("OPCAdapter"),
  //#endregion

  //#region Comment
  CommentRepository: Symbol.for("CommentRepository"),
  CommentAdapter: Symbol.for("CommentAdapter"),
  CommentMapperService: Symbol.for("CommentMapperService"),
  //#endregion

  //#region Arrival
  ArrivalRepository: Symbol.for("ArrivalRepository"),
  ArrivalAdapter: Symbol.for("ArrivalAdapter"),
  ArrivalMapperService: Symbol.for("ArrivalMapperService"),
  //#endregion

  //#region NoteDetail
  NoteDetailRepository: Symbol.for("NoteDetailRepository"),
  NoteDetailAdapter: Symbol.for("NoteDetailAdapter"),
  //#endregion

  //#region PersonByCouple
  PersonByCoupleRepository: Symbol.for("PersonByCoupleRepository"),
  //#endregion

  //#region Location
  LocationRepository: Symbol.for("LocationRepository"),
  LocationAdapter: Symbol.for("LocationAdapter"),
  //#endregion

  //#region
  ProfileRepository: Symbol.for("ProfileRepository"),
  ProfileAdapter: Symbol.for("ProfileAdapter"),
  ProfileUseCase: Symbol.for("ProfileUseCase"),
  ProfileMapperService: Symbol.for("ProfileMapperService"),
  ProfileAssociatedMapperService: Symbol.for("ProfileAssociatedMapperService"),
  ProfileSuggestionMapperService: Symbol.for("ProfileSuggestionMapperService"),
  //#endregion

  //#region
  PersonByProfileRepository: Symbol.for("PersonByProfileRepository"),
  //#endregion

  //#region
  NationalityRepository: Symbol.for("NationalityRepository"),
  NationalityAdapter: Symbol.for("NationalityAdapter"),
  NationalityMapperService: Symbol.for("NationalityMapperService"),
  //#endregion

  //#region InvitationStatus
  InvitationStatusRepository: Symbol.for("InvitationStatusRepository"),
  InvitationStatusAdapter: Symbol.for("InvitationStatusAdapter"),
  //#endregion

  //#region SalesRoom
  GuestRepository: Symbol.for("GuestRepository"),
  //#endregion

  //#region
  ApprovalRepository: Symbol.for("ApprovalRepository"),
  ApprovalAdapter: Symbol.for("ApprovalAdapter"),
  ApprovalUseCase: Symbol.for("ApprovalUseCase"),
  ApprovalMapperService: Symbol.for("ApprovalMapperService"),
  ApprovalInhouseMapperService: Symbol.for("ApprovalInhouseMapperService"),
  //#endregion

  //#region
  ApprovalRepositoryInhouse: Symbol.for("ApprovalRepositoryInhouse"),
  ApprovalAdapterInhouse: Symbol.for("ApprovalAdapterInhouse"),
  //#endregion

  //#region
  GuestServiceRepository: Symbol.for("GuestServiceRepository"),
  GuestServiceAdapter: Symbol.for("GuestServiceAdapter"),
  //#endregion

  //#region Property
  PropertyRepository: Symbol.for("PropertyServiceRepository"),
  PropertyAdapter: Symbol.for("PropertyServiceAdapter"),
  //#region Segment
  SegmentRepository: Symbol.for("SegmentRepository"),
  SegmentAdapter: Symbol.for("SegmentAdapter"),
  //#endregion

  //#region
  LivingPlaceRepository: Symbol.for("LivingPlaceRepository"),
  LivingPlaceAdapter: Symbol.for("LivingPlaceAdapter"),
  LivingPlaceMapperService: Symbol.for("LivingPlaceMapperService"),
  //#endregion

  //#region CardDetail
  CardDetailRepository: Symbol.for("CardDetailRepository"),
  CardDetailAdapter: Symbol.for("CardDetailAdapter"),
  //#endregion

  //#region AditionalData
  AditionalDataRepository: Symbol.for("AditionalDataRepository"),
  AditionalDataAdapter: Symbol.for("AditionalDataAdapter"),
  //#endregion

  //#region HousingType
  HousingTypeRepository: Symbol.for("HousingTypeRepository"),
  HousingTypeAdapter: Symbol.for("HousingTypeAdapter"),
  HousingTypeMapperService: Symbol.for("HousingTypeAdapter"),
  //#endregion

  //#region Club
  ClubRepository: Symbol.for("ClubRepository"),
  ClubAdapter: Symbol.for("ClubAdapter"),
  ClubMapperService: Symbol.for("ClubMapperService"),
  //#endregion

  //#region Address
  AddressRepository: Symbol.for("AddressRepository"),
  AddressAdapter: Symbol.for("AddressAdapter"),
  //#endregion

  //#region AnualIncome
  AnualIncomeRepository: Symbol.for("AnualIncomeRepository"),
  AnualIncomeAdapter: Symbol.for("AnualIncomeAdapter"),
  //#endregion

  //#region ApprovedGifts
  ApprovedGiftsRepository: Symbol.for("ApprovedGiftsRepository"),
  ApprovedGiftsAdapter: Symbol.for("ApprovedGiftsAdapter"),
  //#endregion

  //#region ApprovalStatus
  ApprovalStatusRepository: Symbol.for("ApprovalStatusRepository"),
  ApprovalStatusAdapter: Symbol.for("ApprovalStatusAdapter"),
  ApprovalStatusMapperService: Symbol.for("ApprovalStatusMapperService"),
  //#endregion

  //#region RelationshipStatus
  RelationshipStatusRepository: Symbol.for("RelationshipStatusRepository"),
  RelationshipStatusAdapter: Symbol.for("RelationshipStatusAdapter"),
  RelationshipStatusMapperService: Symbol.for("RelationshipStatusMapperService"),
  //#endregion

  //#region Currency
  CurrencyRepository: Symbol.for("CurrencyRepository"),
  CurrencyAdapter: Symbol.for("CurrencyAdapter"),
  CurrencyMapperService: Symbol.for("CurrencyMapperService"),
  //#endregion

  //#region Bank
  BankRepository: Symbol.for("BankRepository"),
  BankAdapter: Symbol.for("BankAdapter"),
  BankUseCase: Symbol.for("BankUseCase"),
  BankMapperService: Symbol.for("BankMapperService"),
  //#endregion

  //#region CardStamp
  CardStampRepository: Symbol.for("CardStampRepository"),
  CardStampAdapter: Symbol.for("CardStampAdapter"),
  CardStampUseCase: Symbol.for("CardStampUseCase"),
  CardStampMapperService: Symbol.for("CardStampMapperService"),
  //#endregion

  //#region Merchant
  MerchantRepository: Symbol.for("MerchantRepository"),
  MerchantAdapter: Symbol.for("MerchantAdapter"),
  MerchantMapperService: Symbol.for("MerchantMapperService"),
  //#endregion

  //#region ExchangeRate
  ExchangeRateRepository: Symbol.for("ExchangeRateRepository"),
  ExchangeRateAdapter: Symbol.for("ExchangeRateAdapter"),
  ExchangeRateUseCase: Symbol.for("ExchangeRateUseCase"),
  ExchangeRateMapperService: Symbol.for("ExchangeRateMapperService"),
  //#endregion

  //#region ExchangeRateIntranet
  ExchangeRateIntranetRepository: Symbol.for("ExchangeRateIntranetRepository"),
  ExchangeRateIntranetMapperService: Symbol.for("ExchangeRateIntranetMapperService"),
  //#endregion
};
