const Constant = {
  url: "http://localhost:3333",
  city: {
    type: "01",
    name: "Hồ Chí Minh",
    district: [
      {
        code: "760",
        name: "Quận 1",
        imgUrl: require("../assets/images/categories/District/quan1.jpg")
          .default,
      },
      {
        code: "770",
        name: "Quận 3",
        imgUrl: require("../assets/images/categories/District/quan3.jpg")
          .default,
      },
      {
        code: "778",
        name: "Quận 7",
        imgUrl: require("../assets/images/categories/District/quan7.jpg")
          .default,
      },
      {
        code: "771",
        name: "Quận 10",
        imgUrl: require("../assets/images/categories/District/quan10.jpg")
          .default,
      },
      {
        code: "765",
        name: "Quận Bình Thạnh",
        imgUrl: require("../assets/images/categories/District/quanbinhthanh.jpg")
          .default,
      },
      {
        code: "762",
        name: "Quận Thủ Đức",
        imgUrl: require("../assets/images/categories/District/quanthuduc.jpg")
          .default,
      },
    ],
  },
  slide_icon: {
    iconCaret_left: {
      url: require("../assets/images/icons/common/caret/CaretLeft").default,
    },
    iconCaret_right: {
      url: require("../assets/images/icons/common/caret/CaretRight").default,
    },
  },
  utilities: [
    {
      name: "An ninh",
      type: "security_guard",
      url_icon: require("../assets/images/icons/filter/SecurityIcon"),
    },
    {
      name: "Cửa sổ",
      type: "window",
      url_icon: require("../assets/images/icons/filter/WindowIcon"),
    },
    {
      name: "Chỗ để xe",
      type: "parking_situation",
      url_icon: require("../assets/images/icons/filter/MotorIcon"),
    },
    {
      name: "Tự do",
      type: "curfew_situation",
      url_icon: require("../assets/images/icons/filter/ClockIcon"),
    },
    {
      name: "Chủ riêng",
      type: "share_home_as_landlord",
      url_icon: require("../assets/images/icons/filter/ShareHomeIcon"),
    },
    {
      name: "Máy nước nóng",
      type: "water_heater",
      url_icon: require("../assets/images/icons/filter/WaterHeater"),
    },
    {
      name: "Máy lạnh",
      type: "air_conditioned",
      url_icon: require("../assets/images/icons/filter/AirConditionerIcon"),
    },
    {
      name: "Nhà bếp",
      type: "room_kitchen",
      url_icon: require("../assets/images/icons/filter/CookingIcon"),
    },
    {
      name: "Tủ lạnh",
      type: "room_refrigerator",
      url_icon: require("../assets/images/icons/filter/RefrigeratorIcon"),
    },
    {
      name: "Máy giặc",
      type: "room_washing_machine",
      url_icon: require("../assets/images/icons/filter/WashingMachineIcon"),
    },
    {
      name: "Gác lửng",
      type: "loft",
      url_icon: require("../assets/images/icons/filter/StairsIcon"),
    },
    {
      name: "Tủ đồ",
      type: "room_closet",
      url_icon: require("../assets/images/icons/filter/WardrobeIcon"),
    },
    {
      name: "Tivi",
      type: "room_tivi",
      url_icon: require("../assets/images/icons/filter/TelevisionIcon"),
    },
    {
      name: "Giường",
      type: "room_bed",
      url_icon: require("../assets/images/icons/filter/BedroomIcon"),
    },
    {
      name: "WC riêng",
      type: "room_bathroom",
      url_icon: require("../assets/images/icons/filter/ToiletIcon"),
    },
    {
      name: "Wifi",
      type: "room_wifi",
      url_icon: require("../assets/images/icons/filter/WirelessIcon"),
    },
    {
      name: "Thú cưng",
      type: "room_pets_allowed",
      url_icon: require("../assets/images/icons/filter/PetIcon"),
    },
  ],
  category: [
    {
      id: "5fdacb445bde0402bbf4911b",
      type: "NotShared",
      name: "Phòng cho thuê",
    },
    {
      id: "5fdacb445bde0402bbf4911c",
      type: "Shared",
      name: "Phòng ở ghép",
    },
    {
      id: "5fdacb445bde0402bbf4911d",
      type: "Dormitory",
      name: "Kí túc xá",
    },
    {
      id: "5fdacb445bde0402bbf4911e",
      type: "House",
      name: "Nhà nguyên căn",
    },
    {
      id: "5fdacb445bde0402bbf4911f",
      type: "Department",
      name: "Căn hộ",
    },
  ],
  sex: [
    {
      id: "male",
      name: "Nam",
    },
    {
      id: "female",
      name: "Nữ",
    },
  ],
  payload: {
    matchData: { disabled: { $ne: true } },
    room_location: "HCM",
    current_page: 0,
    page_number: 5,
    filters: {},
  },
  placeDetail: {
    address_component: {
      district_index: true,
      name: "Quận 10",
      postal: 0,
    },
    search: {
      query: {
        room_location: "HCM",
        room_location_district: 771,
      },
    },
    type: "",
    room_location: "HCM",
  },
};

export default Constant;
