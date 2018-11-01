const config = {
	api:                "http://9781516a.ngrok.io/api/",//"http://localhost:8000/api/",
	gisPublicAPI:       "https://gis-api.aiesec.org/graphql?access_token=e316ebe109dd84ed16734e5161a2d236d0a7e6daf499941f7c110078e3c75493",
	gisTokenAPI:        token => `https://gis-api.aiesec.org/graphql?access_token=${token}`,
	ipAPI:              "http://ip-api.com/json",
	youtubeURL:         url => `https://www.youtube.com/embed/${url}?enablejsapi=1`,
	defaultVideoURL:    "https://www.youtube.com/embed/CckIMe0VT2k?enablejsapi=1",
	defaultMonthOffset: 6,
	videos:             {
		lcThumbDir:                "/static/videothumbs/lcs/",
		defaultLCThumb:            "default_lc_thumb.jpg",
		entiyPartnerThumbDir:      "/static/videothumbs/entity_partners/",
		defaultEntityPartnerThumb: "default_ep_thumb.jpg",
	},
	logos:              {
		products:      "/static/images/products/",
		subproductsGT: "/static/images/subproducts/",
		subproductsGE: "/static/images/subproducts/",
		sdgs:          "/static/images/sdgs/"
	},
	endpoints:          {
		entities:      "entities.json",
		products:      "products.json",
		sdgs:          "sdgs.json",
		subproductsGT: "subproducts.json?product=2",
		subproductsGE: "subproducts.json?product=5",
		entityPartner: id => `entity_partners/${id}.json`,
		sdg:           id => `sdg/${id}.json`,
		subproduct:    id => `subproduct/${id}.json`,
		opportunities: "opportunities.json",
		login:         "login.json",
		apply:         "apply.json",
	},
	colors:             {
		ibBlue:   {
			dark:  "#188cff",
			light: "#18c2f4",
		},
		ibOrange: {
			dark:  "#ff8c01",
			light: "#ff6d00",
		},
		ibGreen:  {
			dark:  "#3be33d",
			light: "#97e04a",
		},
		ibPurple: {
			dark:  "#ff3b98",
			light: "#ff5eba",
		},
		ibYellow: {
			dark:  "#ffdd00",
			light: "#ffb200",
		},
		ibPink:   {
			dark:  "#d12354",
			light: "#ff3b54",
		},
	},
};

export {config};