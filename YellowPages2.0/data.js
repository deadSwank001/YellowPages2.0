const searchData = [
  {
    "name": "company",
    "category": "Industry/Market",
    "email": "email",
    "phone": "phone",
    "address": "address: main",
    "contact_person": "front desk: name",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "abrdn Focused Small Cap Active",
    "category": "Asset Management",
    "email": "kieran.mcglynn@abrdn.com",
    "phone": "(212) 776-1172",
    "address": "1900 Market St, Ste 200, Philadelphia, PA 19103",
    "contact_person": "Kieran McGlynn",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Advanced Micro Services",
    "category": "Technology",
    "email": "ams@amsnet.us",
    "phone": "(305) 233-4911",
    "address": "12485 Augustine Dr, Santa Clara, CA 95054",
    "contact_person": "AMS Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "AIRO Group Holdings",
    "category": "Aerospace/Mobility",
    "email": "investorrelations@theairogroup.com",
    "phone": "(505) 338-2434",
    "address": "8444 Westpark Drive, McLean, VA 22102",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Akre Focus",
    "category": "Financial Services",
    "email": "chylton@akrecapital.com",
    "phone": "(540) 687-8923",
    "address": "PO Box 998, Middleburg, VA 20118",
    "contact_person": "Chris Hylton",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Alerian MLP",
    "category": "Energy Infrastructure",
    "email": "index@alerian.com",
    "phone": "(972) 934-0300",
    "address": "1290 Broadway, Ste 1000, Denver, CO 80303",
    "contact_person": "Index Team",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Alibaba Group Holding",
    "category": "E-commerce/Tech",
    "email": "newgtld@alibaba-inc.com",
    "phone": "+86 571-88943332",
    "address": "960-1 West Wen Yi Road, Hangzhou, Zhejiang, China",
    "contact_person": "Corporate Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Alphabet (Google)",
    "category": "Technology",
    "email": "press@google.com",
    "phone": "(650) 253-0000",
    "address": "1600 Amphitheatre Pkwy, Mountain View, CA 94043",
    "contact_person": "Press Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Amazon",
    "category": "E-commerce/Cloud",
    "email": "amazon-ir@amazon.com",
    "phone": "(206) 266-1000",
    "address": "410 Terry Ave N, Seattle, WA 98109",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Amorepacific",
    "category": "Consumer Goods",
    "email": "amorepacific@apus.amorepacific.com",
    "phone": "+82 2 6040-5114",
    "address": "100 Hangang-daero, Yongsan-gu, Seoul, S. Korea",
    "contact_person": "Customer Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Analog Devices",
    "category": "Semiconductors",
    "email": "investor.relations@analog.com",
    "phone": "(781) 329-4700",
    "address": "125 Summer Street, Boston, MA 02110",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Apple",
    "category": "Technology",
    "email": "contactus.ir@apple.com",
    "phone": "(408) 996-1010",
    "address": "One Apple Park Way, Cupertino, CA 95014",
    "contact_person": "Contact US IR",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Arm Holdings",
    "category": "Semiconductors",
    "email": "info@arm.com",
    "phone": "(408) 576-1500",
    "address": "120 Rose Orchard Way, San Jose, CA 95134",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Atlanta Braves Holdings",
    "category": "Sports/Entertainment",
    "email": "ir@braves.com",
    "phone": "(404) 614-1501",
    "address": "Truist Park, 755 Battery Avenue, Atlanta, GA 30339",
    "contact_person": "Cameron Rudd",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Autodesk",
    "category": "Software",
    "email": "investors@autodesk.com",
    "phone": "(415) 507-5000",
    "address": "111 McInnis Parkway, San Rafael, CA 94903",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Beiersdorf AG",
    "category": "Consumer Goods",
    "email": "online-relations@beiersdorf.com",
    "phone": "+49 40 49090",
    "address": "Beiersdorfstra\u00dfe 1-9, 22529 Hamburg, Germany",
    "contact_person": "Online Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "BeOne Medicines",
    "category": "Biotech",
    "email": "medicalinformation@beonemed.com",
    "phone": "(781) 801-1800",
    "address": "222 Third Street, Cambridge, MA 02142",
    "contact_person": "Med Info",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Berkshire Hathaway",
    "category": "Conglomerate",
    "email": "ir@berkshirehathaway.com",
    "phone": "(949) 794-7900",
    "address": "18500 Von Karman Ave, Ste 400, Irvine, CA 92612",
    "contact_person": "Corporate HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "BMW Group",
    "category": "Automotive",
    "email": "customerservice@bmwgroup.com",
    "phone": "+49 89 3820",
    "address": "Petuelring 130, 80809 Munich, Germany",
    "contact_person": "Customer Service",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "BrightSpring Health Services",
    "category": "Healthcare",
    "email": "ir@brightspringhealth.com",
    "phone": "(502) 630-7431",
    "address": "805 N. Whittington Pkwy, Louisville, KY 40222",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Broadcom",
    "category": "Semiconductors",
    "email": "investor.relations@broadcom.com",
    "phone": "(408) 433-8000",
    "address": "1320 Ridder Park Drive, San Jose, CA 95131",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Bullish Group",
    "category": "Fintech/Crypto",
    "email": "press@bullish.com",
    "phone": "",
    "address": "United States Office (NY/DE)",
    "contact_person": "Press Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "BYD USA",
    "category": "Automotive/Energy",
    "email": "marketing.us@byd.com",
    "phone": "(213) 748-3980",
    "address": "Walnut St, Pasadena, CA 91101",
    "contact_person": "Marketing US",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Campbell's",
    "category": "Food & Beverage",
    "email": "media_relations@campbellsoup.com",
    "phone": "(856) 342-4800",
    "address": "1 Campbell Pl, Camden, NJ 08103",
    "contact_person": "Media Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Carnival Corporation",
    "category": "Travel/Leisure",
    "email": "ir@carnival.com",
    "phone": "(305) 599-2600",
    "address": "3655 N.W. 87 Avenue, Miami, FL 33178",
    "contact_person": "Beth Roberts",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Charles Schwab",
    "category": "Financial Services",
    "email": "investorrelations@schwab.com",
    "phone": "(817) 859-5000",
    "address": "3000 Schwab Way, Westlake, TX 76262",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Circle (USDC)",
    "category": "Fintech/Stablecoin",
    "email": "support@circle.com",
    "phone": "",
    "address": "99 High Street, Suite 1701, Boston, MA 02110",
    "contact_person": "Support Team",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Citigroup",
    "category": "Banking",
    "email": "ir@citi.com",
    "phone": "(212) 559-1000",
    "address": "388 Greenwich St, New York, NY 10013",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Coca-Cola",
    "category": "Food & Beverage",
    "email": "asktheboard@coca-cola.com",
    "phone": "(404) 676-2121",
    "address": "1 Coca-Cola Plaza, Atlanta, GA 30313",
    "contact_person": "Board Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Coinbase Global",
    "category": "Fintech/Crypto",
    "email": "investor@coinbase.com",
    "phone": "(888) 908-7930",
    "address": "Remote HQ / 1999 Bryan St, Dallas, TX",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Conagra Brands",
    "category": "Food & Beverage",
    "email": "IR@conagra.com",
    "phone": "(312) 549-5002",
    "address": "222 W. Merchandise Mart Plaza, Chicago, IL 60654",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Constellation Brands",
    "category": "Beverages",
    "email": "press@cbrands.com",
    "phone": "(877) 411-6248",
    "address": "50 East Broad Street, Rochester, NY 14614",
    "contact_person": "Media Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Constellation Energy",
    "category": "Energy",
    "email": "investorrelations@constellation.com",
    "phone": "(667) 218-7700",
    "address": "1310 Point Street, Baltimore, MD 21231",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "CoreWeave",
    "category": "Cloud/AI",
    "email": "sales@coreweave.com",
    "phone": "(973) 270-9737",
    "address": "290 W Mt Pleasant Ave, Livingston, NJ 07039",
    "contact_person": "Sales Team",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Coty Inc",
    "category": "Consumer Goods",
    "email": "press@cotyinc.com",
    "phone": "(212) 389-7300",
    "address": "350 Fifth Avenue, New York, NY 10118",
    "contact_person": "Corporate Media",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "CVS Health",
    "category": "Healthcare",
    "email": "investorrelations@cvshealth.com",
    "phone": "(401) 765-1500",
    "address": "One CVS Drive, Woonsocket, RI 02895",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "DHT Holdings",
    "category": "Shipping",
    "email": "info@dhtankers.com",
    "phone": "+1 441 295 1422",
    "address": "Clarendon House, 2 Church Street, Hamilton, Bermuda",
    "contact_person": "Laila Halvorsen",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Dianthus Therapeutics",
    "category": "Biotech",
    "email": "clinicaltrials@dianthustx.com",
    "phone": "(929) 999-4055",
    "address": "7 Times Square, Ste 4302, New York, NY 10036",
    "contact_person": "Clinical Team",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Digital Realty Trust",
    "category": "Data Centers/REIT",
    "email": "sales@digitalrealty.com",
    "phone": "(737) 281-0101",
    "address": "601 W 2nd St, 32nd Floor, Austin, TX 78701",
    "contact_person": "Sales Team",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "89bio",
    "category": "Biotech",
    "email": "info@89bio.com",
    "phone": "(415) 432-9274",
    "address": "655 Montgomery St, Ste 1500, San Francisco, CA 94111",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Element Solutions",
    "category": "Chemicals",
    "email": "info@elementsolutionsinc.com",
    "phone": "",
    "address": "500 E Broward Blvd # 1860, Fort Lauderdale, FL 33394",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "E.l.f. Beauty",
    "category": "Beauty",
    "email": "ir@elfbeauty.com",
    "phone": "",
    "address": "601 12th Street, Oakland, CA 94607",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Eli Lilly",
    "category": "Healthcare",
    "email": "sustainability@lilly.com",
    "phone": "(317) 276-2000",
    "address": "Lilly Corporate Center, Indianapolis, IN 46285",
    "contact_person": "Sustainability",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Enterprise Products Partners",
    "category": "Energy",
    "email": "OwnerAddress.BankChanges@Eprod.com",
    "phone": "(713) 381-6500",
    "address": "1100 Louisiana Street, 10th Floor, Houston, TX 77002",
    "contact_person": "Royalty Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Equinix",
    "category": "Data Centers",
    "email": "analystrelations@equinix.com",
    "phone": "(650) 598-6000",
    "address": "One Lagoon Drive, Redwood City, CA 94065",
    "contact_person": "Analyst Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Estee Lauder",
    "category": "Beauty",
    "email": "irdept@elcompanies.com",
    "phone": "(212) 572-4200",
    "address": "767 Fifth Avenue, New York, NY 10153",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "eToro Group",
    "category": "Fintech",
    "email": "support@etoro.com",
    "phone": "",
    "address": "221 River St, 9th Floor, Hoboken, NJ 07030",
    "contact_person": "Support Team",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Fifth Third Bancorp",
    "category": "Banking",
    "email": "ir@53.com",
    "phone": "(800) 972-3030",
    "address": "38 Fountain Square Plaza, Cincinnati, OH 45263",
    "contact_person": "Main Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Firefly Aerospace",
    "category": "Aerospace",
    "email": "info@firefly.com",
    "phone": "(512) 270-2710",
    "address": "2203 Scottsdale Dr, Leander, TX 78641",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Gabelli Funds",
    "category": "Asset Management",
    "email": "info@gabelli.com",
    "phone": "(914) 921-3700",
    "address": "One Corporate Center, Rye, NY 10580",
    "contact_person": "Main Desk",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Goldman Sachs",
    "category": "Banking",
    "email": "gs-investor-relations@gs.com",
    "phone": "(212) 902-1000",
    "address": "200 West Street, New York, NY 10282",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Hormel Foods",
    "category": "Food & Beverage",
    "email": "consumer@hormel.com",
    "phone": "(507) 437-5611",
    "address": "1 Hormel Place, Austin, MN 55912",
    "contact_person": "Consumer Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "IDACORP",
    "category": "Energy",
    "email": "ir@idacorpinc.com",
    "phone": "(208) 388-2200",
    "address": "1221 W. Idaho St, Boise, ID 83702",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Intel",
    "category": "Semiconductors",
    "email": "invest@intel.com",
    "phone": "(408) 765-8080",
    "address": "2200 Mission College Blvd, Santa Clara, CA 95054",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Interactive Brokers",
    "category": "Financial Services",
    "email": "help@interactivebrokers.com",
    "phone": "(203) 618-5800",
    "address": "One Pickwick Plaza, Greenwich, CT 06830",
    "contact_person": "Customer Service",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Jefferies Financial Group",
    "category": "Banking",
    "email": "investorrelations@jefferies.com",
    "phone": "(212) 284-2300",
    "address": "520 Madison Avenue, New York, NY 10022",
    "contact_person": "Main Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "JP Morgan Chase",
    "category": "Banking",
    "email": "investor.relations@jpmchase.com",
    "phone": "(212) 270-6000",
    "address": "383 Madison Ave, New York, NY 10179",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "KKR & Co.",
    "category": "Private Equity",
    "email": "investor-relations@kkr.com",
    "phone": "(212) 750-8300",
    "address": "30 Hudson Yards, New York, NY 10001",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Klarna Group",
    "category": "Fintech",
    "email": "feedback@klarna.com",
    "phone": "+46 8 120 120 00",
    "address": "Sveav\u00e4gen 46, SE-111 34 Stockholm, Sweden",
    "contact_person": "Main Desk",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Life Time Group Holdings",
    "category": "Health/Fitness",
    "email": "investorrelations@lifetime.life",
    "phone": "(952) 229-7401",
    "address": "2902 Corporate Place, Chanhassen, MN 55317",
    "contact_person": "Connor Wienberg",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "L'Oreal",
    "category": "Beauty",
    "email": "corp-ir@loreal.com",
    "phone": "+33 1 47 56 70 00",
    "address": "41 Rue Martre, 92110 Clichy, France",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Madison Square Garden Sports",
    "category": "Sports/Entertainment",
    "email": "ir@msg.com",
    "phone": "(212) 465-6000",
    "address": "2 Penn Plaza, New York, NY 10121",
    "contact_person": "Corporate HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Mercedes-Benz Group",
    "category": "Automotive",
    "email": "dialog@mercedes-benz.com",
    "phone": "+49 711 170",
    "address": "Mercedesstra\u00dfe 120, 70372 Stuttgart, Germany",
    "contact_person": "Media Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Microsoft",
    "category": "Technology",
    "email": "msft@microsoft.com",
    "phone": "(425) 882-8080",
    "address": "One Microsoft Way, Redmond, WA 98052",
    "contact_person": "Main Desk",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "MNTN",
    "category": "Advertising Technology",
    "email": "press@mountain.com",
    "phone": "(855) 765-7161",
    "address": "823 Congress Avenue #1827, Austin, TX 78768",
    "contact_person": "Media PR",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Morgan Stanley",
    "category": "Banking",
    "email": "investorrelations@morganstanley.com",
    "phone": "(212) 761-4000",
    "address": "1585 Broadway, New York, NY 10036",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Newsmax Media",
    "category": "Media",
    "email": "jobs@newsmax.com",
    "phone": "(561) 686-1165",
    "address": "P.O. Box 20989, West Palm Beach, FL 33416",
    "contact_person": "Customer Service",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Norwegian Cruise Line",
    "category": "Travel/Leisure",
    "email": "ir@nclh.com",
    "phone": "(305) 468-2339",
    "address": "7665 Corporate Center Drive, Miami, FL 33126",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "NuScale Power",
    "category": "Energy/Nuclear",
    "email": "info@nuscalepower.com",
    "phone": "(541) 360-0500",
    "address": "1100 NE Circle Blvd, Ste 350, Corvallis, OR 97330",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Nvidia",
    "category": "AI/Chips",
    "email": "info@nvidia.com",
    "phone": "(408) 486-2000",
    "address": "2788 San Tomas Expy, Santa Clara, CA 95051",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Oklo Inc",
    "category": "Energy/Nuclear",
    "email": "investors@oklo.com",
    "phone": "",
    "address": "230 Harry Byrd Highway, Suite 202, Sterling, VA 20164",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "ON Semiconductor",
    "category": "Semiconductors",
    "email": "investor@onsemi.com",
    "phone": "(602) 244-6600",
    "address": "5701 North Pima Road, Scottsdale, AZ 85250",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Opendoor Technologies",
    "category": "Real Estate Tech",
    "email": "press@opendoor.com",
    "phone": "",
    "address": "PO Box 526, 6320 Passons Blvd, Pico Rivera, CA 90660",
    "contact_person": "Press Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Option Care Health",
    "category": "Healthcare",
    "email": "info@optioncare.com",
    "phone": "(844) 742-2504",
    "address": "3000 Lakeside Drive, Ste 300N, Bannockburn, IL 60015",
    "contact_person": "Main Desk",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Oracle",
    "category": "Technology",
    "email": "investor_relations_ww@oracle.com",
    "phone": "(737) 867-1000",
    "address": "2300 Oracle Way, Austin, TX 78741",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Philip Morris Int'l",
    "category": "Consumer Goods",
    "email": "investorrelations@pmi.com",
    "phone": "(917) 663-2000",
    "address": "120 Park Avenue, New York, NY 10017",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "PNC Financial Services",
    "category": "Banking",
    "email": "investor.relations@pnc.com",
    "phone": "(412) 762-8258",
    "address": "300 Fifth Avenue, Pittsburgh, PA 15222",
    "contact_person": "Bryan K. Gill",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Procter & Gamble",
    "category": "Consumer Goods",
    "email": "MediaRelations.shared@pg.com",
    "phone": "(513) 983-1100",
    "address": "1 P&G Plaza, Cincinnati, OH 45202",
    "contact_person": "Media Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Robinhood Markets",
    "category": "Fintech",
    "email": "press@robinhood.com",
    "phone": "(888) 275-8052",
    "address": "85 Willow Rd, Menlo Park, CA 94025",
    "contact_person": "Press Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Roche Holding",
    "category": "Healthcare",
    "email": "patientcare@roche.com",
    "phone": "+41 61 688 11 11",
    "address": "Grenzacherstrasse 124, 4070 Basel, Switzerland",
    "contact_person": "Patient Care",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Roivant Sciences",
    "category": "Biotech",
    "email": "info@roivant.com",
    "phone": "(646) 495-0522",
    "address": "151 W. 42nd St, 15th Floor, New York, NY 10036",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Royal Caribbean Group",
    "category": "Travel/Leisure",
    "email": "CorporateCommunications@rccl.com",
    "phone": "(305) 539-6000",
    "address": "1050 Caribbean Way, Miami, FL 33132",
    "contact_person": "Corporate Comms",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Samsung Electronics",
    "category": "Technology",
    "email": "support@samsung.com",
    "phone": "(201) 229-4000",
    "address": "85 Challenger Rd, Ridgefield Park, NJ 07660",
    "contact_person": "Main Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Shake Shack",
    "category": "Food & Beverage",
    "email": "investor@shakeshack.com",
    "phone": "(844) 742-2504",
    "address": "225 Varick Street, Ste 301, New York, NY 10003",
    "contact_person": "Alison Sternberg",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Shenzhen Mindray",
    "category": "Healthcare/MedTech",
    "email": "intl-market@mindray.com",
    "phone": "+86 755 8188 8997",
    "address": "Mindray Building, Keji 12th Rd South, Shenzhen, China",
    "contact_person": "Global Market",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "SL Green Realty",
    "category": "Real Estate",
    "email": "General.Inquiries@slgreen.com",
    "phone": "(212) 594-2700",
    "address": "One Vanderbilt Ave, New York, NY 10017",
    "contact_person": "General Inquiries",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Smithfield Foods",
    "category": "Food & Beverage",
    "email": "ir@smithfield.com",
    "phone": "(757) 365-3000",
    "address": "200 Commerce Street, Smithfield, VA 23430",
    "contact_person": "Julie MacMedan",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "SoftBank Group",
    "category": "Investment/Tech",
    "email": "irdesk@softbank.co.jp",
    "phone": "+81 3 6889 2000",
    "address": "1-7-1 Kaigan, Minato-ku, Tokyo, Japan",
    "contact_person": "Corporate HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Stellantis",
    "category": "Automotive",
    "email": "media@stellantis.com",
    "phone": "(248) 576-5741",
    "address": "1000 Chrysler Dr, Auburn Hills, MI 48326",
    "contact_person": "Maura Cook",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "StubHub Holdings",
    "category": "E-commerce/Tickets",
    "email": "partners@stubhub.com",
    "phone": "",
    "address": "1209 Orange Street, Wilmington, DE 19801",
    "contact_person": "Partners Program",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "TSMC",
    "category": "Semiconductors",
    "email": "invest@tsmc.com",
    "phone": "+886 3-5636688",
    "address": "8, Li-Hsin Rd. 6, Hsinchu Science Park, Taiwan",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Tencent Holdings",
    "category": "Technology",
    "email": "ir@tencent.com",
    "phone": "+86 755 8601 3388",
    "address": "Tencent Binhai Towers, Nanshan, Shenzhen, China",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Tesla",
    "category": "Automotive/Energy",
    "email": "press@tesla.com",
    "phone": "(877) 798-3752",
    "address": "1 Tesla Road, Austin, TX 78725",
    "contact_person": "Press Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Texas Instruments",
    "category": "Semiconductors",
    "email": "investor_relations@ti.com",
    "phone": "(972) 995-2011",
    "address": "12500 TI Blvd, Dallas, TX 75243",
    "contact_person": "Main Directory",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Tyson Foods",
    "category": "Food & Beverage",
    "email": "comments@tyson.com",
    "phone": "(479) 290-4000",
    "address": "2200 W. Don Tyson Parkway, Springdale, AR 72762",
    "contact_person": "Consumer Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Ulta Beauty",
    "category": "Retail/Beauty",
    "email": "investorrelations@ulta.com",
    "phone": "(630) 410-4800",
    "address": "1000 Remington Blvd, Ste 120, Bolingbrook, IL 60440",
    "contact_person": "Guest Services",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "UnitedHealth Group",
    "category": "Healthcare",
    "email": "sustainability@uhg.com",
    "phone": "(952) 936-1300",
    "address": "9900 Bren Rd E, Minnetonka, MN 55343",
    "contact_person": "Sustainability",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "V2X Inc",
    "category": "Defense/Technology",
    "email": "info@gov2x.com",
    "phone": "(703) 790-0500",
    "address": "7901 Jones Branch Dr, McLean, VA 22102",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Viking Holdings",
    "category": "Travel/Leisure",
    "email": "investorrelations@viking.com",
    "phone": "(818) 227-1234",
    "address": "5700 Canoga Avenue, Woodland Hills, CA 91367",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Vistra Corp",
    "category": "Energy",
    "email": "investor@vistracorp.com",
    "phone": "(214) 812-0046",
    "address": "6555 Sierra Drive, Irving, TX 75039",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Volkswagen Group",
    "category": "Automotive",
    "email": "vw@volkswagen.de",
    "phone": "+49 5361 90",
    "address": "Berliner Ring 2, 38440 Wolfsburg, Germany",
    "contact_person": "Main Email",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Voyager Technologies",
    "category": "Aerospace",
    "email": "info@voyager.space",
    "phone": "(303) 500-6985",
    "address": "1225 17th Street, Ste 1100, Denver, CO 80202",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Walmart",
    "category": "Retail",
    "email": "IR@walmart.com",
    "phone": "(479) 273-4000",
    "address": "702 SW 8th St, Bentonville, AR 72716",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Walt Disney Company",
    "category": "Entertainment",
    "email": "press@disney.com",
    "phone": "(818) 560-1000",
    "address": "500 S Buena Vista St, Burbank, CA 91521",
    "contact_person": "Corporate Press",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Warner Bros. Discovery",
    "category": "Entertainment",
    "email": "Michael.Walbrecht@warnerbros.com",
    "phone": "(818) 954-1910",
    "address": "4000 Warner Boulevard, Burbank, CA 91522",
    "contact_person": "Public Affairs",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "WaterBridge Infra",
    "category": "Energy Infrastructure",
    "email": "contact@wbinfra.com",
    "phone": "(713) 230-8864",
    "address": "5555 San Felipe, Ste 1200, Houston, TX 77056",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "WEC Energy Group",
    "category": "Energy",
    "email": "investor_relations@wecenergygroup.com",
    "phone": "(414) 221-2345",
    "address": "231 W. Michigan St, Milwaukee, WI 53203",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Wells Fargo",
    "category": "Banking",
    "email": "investorrelations@wellsfargo.com",
    "phone": "(800) 869-3557",
    "address": "420 Montgomery Street, San Francisco, CA 94104",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Welltower",
    "category": "Real Estate/Healthcare",
    "email": "info@welltower.com",
    "phone": "(419) 247-2800",
    "address": "4500 Dorr Street, Toledo, OH 43615",
    "contact_person": "Krishna Soma",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Western Midstream",
    "category": "Energy",
    "email": "investor@westernmidstream.com",
    "phone": "(832) 636-1009",
    "address": "9950 Woodloch Forest Dr, Ste 2800, The Woodlands, TX 77380",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "WH Group",
    "category": "Food & Beverage",
    "email": "investor@wh-group.com",
    "phone": "+852 2868 2828",
    "address": "1 Austin Road, Kowloon, Hong Kong",
    "contact_person": "Investor Relations",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Workday Inc",
    "category": "Software",
    "email": "ir@workday.com",
    "phone": "(925) 951-9000",
    "address": "6110 Stoneridge Mall Road, Pleasanton, CA 94588",
    "contact_person": "Leah Bauer",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "New York Times (Newsroom)",
    "category": "Media",
    "email": "corrections@nytimes.com",
    "phone": "(212) 556-1234",
    "address": "620 Eighth Ave, New York, NY 10018",
    "contact_person": "Corrections Desk",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Wired Magazine",
    "category": "Media",
    "email": "mail@wired.com",
    "phone": "(415) 276-5000",
    "address": "520 Third St, San Francisco, CA 94107",
    "contact_person": "Andy Greenberg",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "The New Yorker",
    "category": "Media",
    "email": "customerservice@newyorker.com",
    "phone": "(800) 825-2510",
    "address": "1 World Trade Center, New York, NY 10007",
    "contact_person": "Adolph Ochs",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Vice Magazine",
    "category": "Media",
    "email": "press@vice.com",
    "phone": "(718) 599-3101",
    "address": "49 S 2nd St, Brooklyn, NY 11249",
    "contact_person": "Press Office",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Vogue",
    "category": "Media",
    "email": "help.vogue@condenast.com",
    "phone": "(800) 234-2347",
    "address": "1 World Trade Center, New York, NY 10007",
    "contact_person": "Customer Service",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Penguin Publishers",
    "category": "Publishing",
    "email": "consumerservices@penguinrandomhouse.com",
    "phone": "(212) 782-9000",
    "address": "1745 Broadway, New York, NY 10019",
    "contact_person": "Consumer Svc",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Norton Publishing",
    "category": "Publishing",
    "email": "email@wwnorton.com",
    "phone": "(212) 354-5500",
    "address": "500 Fifth Ave, New York, NY 10110",
    "contact_person": "Main Email",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Milkweed Publishers",
    "category": "Publishing",
    "email": "morgan_larocca@milkweed.org",
    "phone": "(612) 332-3192",
    "address": "1011 Washington Ave S, Minneapolis, MN 55415",
    "contact_person": "Morgan LaRocca",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Blancpain Ocean Initiative",
    "category": "Conservation/Project",
    "email": "info@blancpain.com",
    "phone": "+41 21 796 36 36",
    "address": "Chemin de l'Etang 6, 1094 Paudex, Switzerland",
    "contact_person": "Main Desk",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Normal Phenomenon of Life",
    "category": "Lifestyle/Biotech",
    "email": "info@normalphenomena.life",
    "phone": "",
    "address": "London, UK",
    "contact_person": "Contact Email",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "GetHarley",
    "category": "Skincare/Telehealth",
    "email": "support@getharley.com",
    "phone": "",
    "address": "Dogpatch Labs, The CHQ Building, Dublin, Ireland",
    "contact_person": "Practitioner Login",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Liontrust Global Innovation",
    "category": "Asset Management",
    "email": "info@liontrust.co.uk",
    "phone": "+44 20 7412 1700",
    "address": "2 Savoy Court, London, WC2R 0EZ, UK",
    "contact_person": "Clare Pleydell",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Richard Mille Watches",
    "category": "Luxury Goods",
    "email": "contact@richardmille.com",
    "phone": "+41 32 957 66 00",
    "address": "Place de la R\u00e9sistance, 2340 Le Noirmont, Switzerland",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Alpine Cars",
    "category": "Automotive",
    "email": "contact@alpinecars.com",
    "phone": "+33 1 76 84 04 04",
    "address": "5 Avenue de la Marne, 92100 Boulogne-Billancourt, France",
    "contact_person": "Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Tetra Pak",
    "category": "Packaging",
    "email": "info.usa@tetrapak.com",
    "phone": "(940) 565-8800",
    "address": "24800 Denso Drive, Southfield, MI 48033",
    "contact_person": "Main Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Apollo E-scooters",
    "category": "Transport/EV",
    "email": "support@apolloscooters.co",
    "phone": "(833) 246-3028",
    "address": "8030 Rue Jarry E, Anjou, QC H1J 1H5, Canada",
    "contact_person": "Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Mistral AI",
    "category": "AI/Software",
    "email": "contact@mistral.ai",
    "phone": "",
    "address": "15 Rue des Halles, 75001 Paris, France",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "H AI (hcompany.ai)",
    "category": "AI/Software",
    "email": "contact@hcompany.ai",
    "phone": "",
    "address": "8 rue Sainte-C\u00e9cile, 75009 Paris, France",
    "contact_person": "Contact",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Spore.Bio",
    "category": "Biotech",
    "email": "contact@spore.bio",
    "phone": "",
    "address": "10 Rue Treilhard, 75008 Paris, France",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "NcodiN",
    "category": "Semiconductors",
    "email": "contact@ncodin.com",
    "phone": "",
    "address": "42 Cr Pierre Vasseur, 91120 Palaiseau, France",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Sweep DataOps",
    "category": "Data/Software",
    "email": "hello@sweep.io",
    "phone": "",
    "address": "Paris, France",
    "contact_person": "Book a Demo",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Atlar Fintech",
    "category": "Fintech",
    "email": "hello@atlar.com",
    "phone": "",
    "address": "Stockholm, Sweden",
    "contact_person": "Treasury Team",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Lovable (GPT Engineer)",
    "category": "AI/Software",
    "email": "support@lovable.dev",
    "phone": "",
    "address": "Stockholm, Sweden",
    "contact_person": "Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Papershell",
    "category": "Furniture/Biotech",
    "email": "finance@papershell.se",
    "phone": "",
    "address": "Tuagatan 5, 543 50 Tibro, Sweden",
    "contact_person": "Finance Dept",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Leya GenAI",
    "category": "Legal AI",
    "email": "support@leya.law",
    "phone": "",
    "address": "Stockholm, Sweden",
    "contact_person": "Legal Consult",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "SuperNormal",
    "category": "AI/Software",
    "email": "help@supernormal.com",
    "phone": "",
    "address": "New York, NY",
    "contact_person": "Support",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "H2 GreenSteel",
    "category": "Clean Industry",
    "email": "info@h2greensteel.com",
    "phone": "",
    "address": "Norra Stationsgatan 93A, Stockholm, Sweden",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Neko Health",
    "category": "MedTech",
    "email": "hello@nekohealth.com",
    "phone": "+46 8-502 427 76",
    "address": "Stockholm, Sweden",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Smitten Kitten",
    "category": "Retail",
    "email": "shipping@smittenkittenonline.com",
    "phone": "(612) 721-6088",
    "address": "2223 E 35th St, Minneapolis, MN 55407",
    "contact_person": "Retail HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Pebl MN Landscaping (NEC)",
    "category": "Construction/Landscaping",
    "email": "info@pebl.design",
    "phone": "(612) 226-3063",
    "address": "1819 Dupont Ave S, Minneapolis, MN 55403",
    "contact_person": "LRI Division",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "BTRY AG",
    "category": "Energy/Battery",
    "email": "jeronimo@btry.ch",
    "phone": "",
    "address": "\u00dcberlandstrasse 129, 8600 D\u00fcbendorf, Switzerland",
    "contact_person": "Jeronimo",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Univerbal",
    "category": "AI/Language",
    "email": "help@univerbal.app",
    "phone": "",
    "address": "Zurich, Switzerland",
    "contact_person": "Judith",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Yokoy AI Fintech",
    "category": "Fintech",
    "email": "support@yokoy.ai",
    "phone": "",
    "address": "Zurich, Switzerland",
    "contact_person": "Customer Care",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Nanoflex Robotics",
    "category": "MedTech/Robotics",
    "email": "info@nanoflexrobotics.com",
    "phone": "",
    "address": "S\u00e4gereistrasse 21, 8152 Glattbrugg, Switzerland",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Riskwolf AG",
    "category": "Insurtech",
    "email": "contact@riskwolf.com",
    "phone": "",
    "address": "Neeserweg 16, 8048 Zurich, Switzerland",
    "contact_person": "Thomas Krapf",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Decentriq AG",
    "category": "Cybersecurity",
    "email": "hello@decentriq.com",
    "phone": "",
    "address": "Josefstrasse 219, 8005 Z\u00fcrich, Switzerland",
    "contact_person": "HQ Main",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "LatticeFlow AI",
    "category": "AI/Software",
    "email": "contact@latticeflow.ai",
    "phone": "",
    "address": "F\u00f6rrlibuckstrasse 70, 8005 Z\u00fcrich, Switzerland",
    "contact_person": "Main HQ",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Oxyle AG",
    "category": "CleanTech",
    "email": "mail@oxyle.ch",
    "phone": "",
    "address": "Wagistrasse 21, 8952 Schlieren, Switzerland",
    "contact_person": "Fajer Mushtaq",
    "website": "",
    "source": "B-Raz Orgo"
  },
  {
    "name": "Abrdn Focused Small Cap Active",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Advanced Micro Services",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "AIRO Group Holdings",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Akre Focus",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Alerian MLP",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Alibaba Group Holding",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Alphabet",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Amazon",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "American Funds Multi-Sector Income",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Amorepacific",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Analog Devices",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Apple",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Arm Holdings",
    "category": "Business",
    "email": "",
    "phone": "+1 (408) 576-1500",
    "address": "North American Headquarters. 120 Rose Orchard Way San Jose, CA 95134-1358",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Atlanta Braves Holdings",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Autodesk",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Beiserdorf",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BeOne Medicines",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Berkshire Hathaway",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BMW",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BrightSpring Health Services",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BroadCom",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Bullish",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BYD",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Campbell's",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Carnival",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Charles Schwab",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Cigna Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Circle Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Citigroup",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Coca-Cola",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Coinbase Global",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Communications Svcs Select Sector SPDR",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Conagra Brands",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Constellation Brands",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Constellation Energy",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Consumer Discretnry Select Sector SPDR",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "CoreWeave",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Coty",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "CVS Health",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "DHT Holdings",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Dianthus Therapeutics",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Digital Realty Trust",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Dimensional International Value",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Dimensional US Equity Market",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "89bio",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Element Solutions",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "E.l.f. Beauty",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Eli Lilly",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "EnterPrise Products Partners",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Equinix",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Estee Lauder",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "EToro Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Fidelity Enhanced Large Cap",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Fifth Third Bancorp",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Figma",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Financial Select Sector SPDR",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Firefly Aerospace",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Gabelli Gold Fund",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Gabelli Utilities",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Goldman Sachs",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Hartford Strategic Income",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Health Care Select Sector",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Hormel Foods",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "IdaCorp",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Intel",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Interactive Brokers Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Invesco QQQ Trust",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "iShares Core S&P",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "iShares iBoxx $ Investmt Grade Corp Bond",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "iShares STOXX Europe 600 Autos and Parts",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "iShares U.S. Treasury Bond",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Janus Henderson Us Real Estate",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Jefferies Financial Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "JP-Morgan Equity Income",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "JP Morgan Mortgage-Backed Securities",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "KKR",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Klarna Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Life Time Group Holdings",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Loomis Sayles Bond",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "L'Oreal",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Madison Square Garden Sports",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Mercedes-Benz Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Microsoft",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "MNTN",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Morgan Stanley",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "NewsMax",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Norwegian Cruise Lines Holdings",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "NuScale Power",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Nvidia",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Oklo",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "ON Semiconductor",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Opendoor Technologies",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Option Care Health",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Oracle",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Philip Morris International",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Pipco Enhanced Short Maturity Active",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Pimco Global Bond Opports",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Pimco Income",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "PNC Financial Services",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Procter & Gamble",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Renaissance IPO",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Robinhood Markets",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Roche Holding",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Roivant Sciences",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Royal Caribbean Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Samsung Electronics",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Shake Shack",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Shezhen Mindray Bio-Medical Electronics",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "SL Green Realty",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Smithfield Foods",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "SoftBank Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Stellantis",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "StubHub Holdings",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Taiwan Semiconductor",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Technology Select Sectore SPDR",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Tencent Holdings",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Tesla",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Texas Instruments",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Touchstone Strategic Income",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Tyson Foods",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Ulta Beauty",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "UnitedHealth Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "V2X",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Vanguard Mortgage-Backed Securities",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Vanguard Total Bond Market",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Viking Holdinds",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Vistra",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Volkswagen",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Voyager Technologies",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Walmart",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Walt Disney",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Warner Brothers",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Grant Hill",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "WaterBridge Infrastructure",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "WEC Energy Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Wells Fargo",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Welltower",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Western Midstream Partners",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "WH Group",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Workday",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Newsroom @",
    "category": "Business",
    "email": "",
    "phone": "Corrections",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Wired Magazine",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Andy Greenberg",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "The NewYorker",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Adolph Ochs",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Vice Magazine",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Vogue",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Penguin Publishers",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Norton Publishing",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "MilkWeed Publishers",
    "category": "Business",
    "email": "",
    "phone": "(612) 332-3192",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Blanq-Pain Ocean Initiative",
    "category": "clean water project",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "UBS Banking",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "RBC Banking",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Chase Bank US",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Wings Financial",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "USbank",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "UPS",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Fed Ex",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Pictet Investments",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "GetHarley SkinCare",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Versace",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "LionTrust Global Innovations",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Richard Mille Watches",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Alpine Cars",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Spyder Cars",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Payments Unbound",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "MR Maps",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Sarps Pixley Gold Standard",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Normal Phenomenon of Life",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "VirusTotal",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "GitHub",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Tetra Pak",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Samsung x John Lewis x Ralph Lauren",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Wired Consulting",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Apollo E-scooters",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Robin AI",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Gaia Family",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Sylvera",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Containerville",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Opua x Carbon Romovale",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "PhysicsX",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Lindus Health",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Field Batteries",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Newcleo",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Volt Payments",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Carbon Equity",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Overstory Project",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Coolgradient Energy",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Monumental Housing",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Bloom + Wolf",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Weaviate",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Cradel BioPlastics",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Solvimon Fintech",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "10x Contract Consulting",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Haaven Tinyhouses",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Slay Digital Apps",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Dryad Wildfire detection",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Qdrant vector Databases",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Ovan Care Fertility",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Jina AI",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Endel Music App",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Cambrium Protein Engineering",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "TheBlood Fertility Testing",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "UltiHash Energy Conservation",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BlueLayer Carbon Credits",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Noloco No-Code Apps",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "CaliberAI",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Tines",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Automation Platform",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Antler Bio",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Inspeq AI",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Gazelle Wind Power",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "OpenVolt",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BareSpace.io",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "EdgeTier",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "ReOrbit Sattelites as IoT",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Realm Digital Search",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Paebbl Concrete Co.",
    "category": ".Nec Pebl MN",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Distance Technologies",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Steady Energy",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Enifer (Waste-to-food-sciences) BioProteins",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Skyfora Sattelites",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Swarmia Sofware Platform",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Raava Sartups",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Neuraspace Satellites",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "MyCareForce Medical",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Sheerme \"Uber For Salons'",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Glooma Medical",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Oscar HomeCare",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Ubbu Code-Learning Platform",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Sqill Video Editor",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Paynest Finance Management",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Bhout Smart-Boxing-Bag",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Onum DataSecOps",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Luzia AI",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Uelz Payments",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Jucuyi HealthCare",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Signal Communications",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "DMW",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Tech.Exec Magazine",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "iFeel Mental Health",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Boopos Mergers + Acquisitions",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Shakers Temp Agency",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Seniors HomeCare",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "InvoPop Invoices",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Embat Finance",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Electra Car Chargers",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Amo Social Media",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Bioptimus Health",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Mistral AI",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "H AI",
    "category": "(hcompany.ai",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Spore.Bio",
    "category": "Sanitation",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "NcodiN",
    "category": "Semis",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Sweep DataOps",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Dust AI",
    "category": "custom bots",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Atlar Cunsumer Fintech",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Lovable (GPT Engineer",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Papershell Furniture",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Leya GenAI",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "SuperNormal Agenda Software",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "H2 GreenSteel",
    "category": "(Hydrogen Steel",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Neko Health",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Smitten Kitten",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Fever Energy",
    "category": "(VVPs",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Erroc cloud sec.",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Estud Hygiene",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BTRY",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Univerbal",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Beezelabs Cardio",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "DSI US",
    "contact_person": "API Int.",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Yokoy AI Fintech",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Nanoflex Robotics",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Riskwolf",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Decentriq",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "LatticeFlow",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Oxyle",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Brothers Pest Control",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Markings office supplies",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BlueDiamond Europe",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "BlueDiamond SouthAm.",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "EA Games",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Ubisoft",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Treyarch Studios",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "Xbox Game Studios",
    "category": "Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "B-Raz Sep22-25"
  },
  {
    "name": "The UPS Store",
    "category": "Local Business",
    "email": "",
    "phone": "7635570419",
    "address": "4190 Vinewood Lane N, Ste 111 Plymouth MN 55442",
    "contact_person": "",
    "website": "theupsstorelocal.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Colorado Tire Service",
    "category": "Local Business",
    "email": "service.cotire@omnique.com",
    "phone": "3033401420",
    "address": "1541 Chambers Road",
    "contact_person": "Tom Teltow",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "CoreHealth Chiropractic",
    "category": "Local Business",
    "email": "drcrane@corechiroclinics.com",
    "phone": "6128729596",
    "address": "2873 Lyndale Ave S",
    "contact_person": "Dr Neil crane",
    "website": "corechiroclinics.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Starbuds",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Aurora Colorado",
    "contact_person": "",
    "website": "starbuds303.com",
    "source": "GoodPipeline"
  },
  {
    "name": "The Herbal Greenhouse",
    "category": "Local Business",
    "email": "theherbalgreenhouse2013@yahoo.com",
    "phone": "674-476-2865",
    "address": "555 Browns Crossing Road NW Milledgeville, GA",
    "contact_person": "Brandi LaMere",
    "website": "theherbalgreenhouse.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Daniels",
    "category": "Local Business",
    "email": "danielsantiques@att.net",
    "phone": "654 522 2420",
    "address": "615 E. Las Olas Ft Lauderdale Fl",
    "contact_person": "Jonathan Daniels",
    "website": "danielsantiques.com",
    "source": "GoodPipeline"
  },
  {
    "name": "OSHA MN",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Fiction Books by",
    "category": "Local Business",
    "email": "garyrosebooks@comcast.net",
    "phone": "612 310 8905",
    "address": "",
    "contact_person": "Gary L. Rose",
    "website": "garyrosebooks.blogspot.com",
    "source": "GoodPipeline"
  },
  {
    "name": "T-Mobile",
    "category": "Local Business",
    "email": "Brandan.Graber1@T-mobile.com",
    "phone": "3033333103",
    "address": "3000 E First Ave Denver Co",
    "contact_person": "Brandon Graber",
    "website": "wirelessvision.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Amazon MN",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Amazon Naturals",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "suredesigntshirts",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "suredesigntshirts.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Visa MN",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "CSL Plasma",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Minnesota DHS",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Big Fedora Cards",
    "category": "Local Business",
    "email": "customerservice@bigfedora.com",
    "phone": "6127221811",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Intercard Debt Systems",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "intercardinc.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Institute for Athletic Medicine",
    "category": "Local Business",
    "email": "",
    "phone": "7635519511",
    "address": "Plymouth City Center, 15655 37th Ave",
    "contact_person": "Jessica Olderness",
    "website": "athleticmedicine.org",
    "source": "GoodPipeline"
  },
  {
    "name": "State Farm Insurance",
    "category": "Local Business",
    "email": "",
    "phone": "7635569890",
    "address": "",
    "contact_person": "J Wieden",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Afton Leather",
    "category": "Local Business",
    "email": "lookgood@aftonleather.com",
    "phone": "6519981344",
    "address": "3411 St. Croiz Trail",
    "contact_person": "",
    "website": "AftonLeather.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Fogo De Chao",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Keller Williams",
    "category": "Local Business",
    "email": "Christine@BackmannTeam.com",
    "phone": "612 900 6850",
    "address": "7365 Kirkwood Court",
    "contact_person": "Christine Burgess",
    "website": "BackmannTeam.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Foot Locker",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Rehab Bike Repair",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "dandyhorse bike repair",
    "category": "Local Business",
    "email": "",
    "phone": "612 276 3224",
    "address": "207 E Hennepin Ave",
    "contact_person": "",
    "website": "dandyhorsebikerepair.com",
    "source": "GoodPipeline"
  },
  {
    "name": "GrubHub",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "dagobert Festival Montreal",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Arthi Venkatapathy, PT",
    "category": "Local Business",
    "email": "",
    "phone": "763 551 9511",
    "address": "Plymouth City Center, 15655 37th Ave N",
    "contact_person": "Arthi Venkatapathy, PT",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Wells Fargo",
    "category": "Local Business",
    "email": "",
    "phone": "612 667 1334",
    "address": "Old Saint Anthony Branch",
    "contact_person": "Johana Orellana",
    "website": "wellsfargo.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Gophermods PC Repairs",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "PC Repairs in Plymouth",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "PC Repairs in Minneapolis",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "American Heart Association",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Souix Falls Fire Rescue",
    "contact_person": "Kelly Krogan",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "KwikTrip Rewards",
    "category": "Local Business",
    "email": "",
    "phone": "1-800-305-6666",
    "address": "",
    "contact_person": "",
    "website": "KwikRewards.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Myxed Up Creations",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Colfax Ave Aurora Co",
    "contact_person": "",
    "website": "MyxedUp.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Hennepin County Criminal Courts",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "AAA Movers Brooklyn Park",
    "category": "Local Business",
    "email": "",
    "phone": "612 588 6683",
    "address": "",
    "contact_person": "",
    "website": "aaamoversince.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Entheos Vibrations",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "AJ (Alek) Taft",
    "website": "entheosvibration.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Lunds & Byerlys",
    "category": "Local Business",
    "email": "",
    "phone": "952-548-1400",
    "address": "",
    "contact_person": "",
    "website": "LandB.mn",
    "source": "GoodPipeline"
  },
  {
    "name": "Harmonic Namaste",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "",
    "website": "harmonicnamaste.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Widely Quality brand",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "University Commons and Boarding",
    "category": "Local Business",
    "email": "",
    "phone": "612 623 3225",
    "address": "609 Huron Blvd SE",
    "contact_person": "",
    "website": "UCMN.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Arboriculture Experts",
    "category": "Local Business",
    "email": "",
    "phone": "9526870815",
    "address": "MN",
    "contact_person": "J Franklin Williams",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Plymouth Regenerative Care",
    "category": "Local Business",
    "email": "",
    "phone": "763 710 5251",
    "address": "9800 Shelard Pkwy Quie 212, Plymouth",
    "contact_person": "Dr. Jay Huber",
    "website": "RegenCareMN.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Quebec Mix Smoke Shop",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "277 St Joseph Est, G1k 3B1",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Tie Dye Artists",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Erika Diaz and Zach Egan",
    "website": "Toter Ties",
    "source": "GoodPipeline"
  },
  {
    "name": "Atalho de Mercado",
    "category": "Local Business",
    "email": "reservas@grupoatalho.pt",
    "phone": "",
    "address": "Mercado de Lisboa",
    "contact_person": "",
    "website": "grupoatalho.pt",
    "source": "GoodPipeline"
  },
  {
    "name": "Uber Minneapolis",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Stork tree Services",
    "category": "Local Business",
    "email": "",
    "phone": "507 923 3885",
    "address": "Harmony, MN",
    "contact_person": "Tyler E Stork",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Renter's Warehouse",
    "category": "Local Business",
    "email": "Jsolie@RentersWarehouse.com",
    "phone": "612 202 3820",
    "address": "MN",
    "contact_person": "Justin Solie",
    "website": "RentersWarehouse.com",
    "source": "GoodPipeline"
  },
  {
    "name": "SW Prime",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "RideShare company?",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "The MidNord Empanada Truck",
    "category": "Local Business",
    "email": "megan@midnord.com",
    "phone": "612 801 6253",
    "address": "NorthLoop MN",
    "contact_person": "Megan Gaffney",
    "website": "Midnord.com",
    "source": "GoodPipeline"
  },
  {
    "name": "The SpearMint Rhino",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Chrisp & Green",
    "category": "Local Business",
    "email": "maplegrove@crispandgreen.com",
    "phone": "763 445 9690",
    "address": "Maple Grove",
    "contact_person": "Sophie L'esperance",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Tooth By The Lake",
    "category": "Local Business",
    "email": "",
    "phone": "952 475 1101",
    "address": "Hopkins, MN",
    "contact_person": "Kari Seaverson",
    "website": "toothbythelake.com",
    "source": "GoodPipeline"
  },
  {
    "name": "HYTOZ",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "",
    "website": "squareup.com/store/myhytoz",
    "source": "GoodPipeline"
  },
  {
    "name": "Ecig Market",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "8413 W Broadway Minneapolis",
    "contact_person": "",
    "website": "ecigmarket.com",
    "source": "GoodPipeline"
  },
  {
    "name": "KmKeyStudio",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Crave",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minneapolis",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Specialty Pallet and Crate",
    "category": "Local Business",
    "email": "rob@specialtypallet.com",
    "phone": "612 889 4961",
    "address": "205 E St Boyceville, Wi 54725",
    "contact_person": "Robert Rieckenberg",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "MN Hemp Company",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Cottage Grove, MN",
    "contact_person": "",
    "website": "mnhempcompany.com",
    "source": "GoodPipeline"
  },
  {
    "name": "tpt",
    "category": "Local Business",
    "email": "",
    "phone": "651 229 1300",
    "address": "172 E Fourth st, St Paul Mn",
    "contact_person": "",
    "website": "tpt.org",
    "source": "GoodPipeline"
  },
  {
    "name": "Service Central",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "PA",
    "contact_person": "",
    "website": "tirekingdom.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Tighten Up Body Sculpting",
    "category": "Local Business",
    "email": "zt.wien@gmail.com",
    "phone": "414 339 3868",
    "address": "2908 Harriet Ave Minneaplos",
    "contact_person": "Zach Wiesen",
    "website": "tightenupbodysculpting.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Sunshine Factory",
    "category": "Local Business",
    "email": "",
    "phone": "763 535 7000",
    "address": "4100 Vinewood Ln, Plymouth",
    "contact_person": "",
    "website": "esunshinefactory.com",
    "source": "GoodPipeline"
  },
  {
    "name": "healtheast",
    "category": "Local Business",
    "email": "jlkellner@healtheast.org",
    "phone": "651 326 3645",
    "address": "69 W Exchange, St St Paul",
    "contact_person": "Jenny Kellner",
    "website": "healtheast.org",
    "source": "GoodPipeline"
  },
  {
    "name": "Stuart Manning and associates",
    "category": "Local Business",
    "email": "",
    "phone": "612 872 0431",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Hot Comics",
    "category": "Local Business",
    "email": "Winnetka Ave",
    "phone": "763 593 1223",
    "address": "New Hope",
    "contact_person": "Mike",
    "website": "HotComicsAndCollectibles.com",
    "source": "GoodPipeline"
  },
  {
    "name": "The Tavern Grill and Bar",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Arden Hills, MN",
    "contact_person": "",
    "website": "TheTavernGrill.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Affinity Medical Group",
    "category": "Local Business",
    "email": "",
    "phone": "763 551 1344",
    "address": "New Hope",
    "contact_person": "",
    "website": "affinitymedical.org",
    "source": "GoodPipeline"
  },
  {
    "name": "Pickens Technical College",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Aurora Colorado",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "VIP Halukakah",
    "category": "Local Business",
    "email": "Halukakah@Yeah.net",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "halukakah.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Magnetic Originals",
    "category": "Local Business",
    "email": "Jeff@Houseofgauss.com",
    "phone": "952 939 4150",
    "address": "Calhoun Square",
    "contact_person": "",
    "website": "MagnetDude.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Custom Steel Fab",
    "category": "Local Business",
    "email": "alexhwig@gmail.com",
    "phone": "952 564 9939",
    "address": "",
    "contact_person": "A. Hartwg",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Ecig Crib",
    "category": "Local Business",
    "email": "",
    "phone": "763 421 6200",
    "address": "Coon Rapids",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "IC System",
    "category": "Local Business",
    "email": "cbell@icsystem.com",
    "phone": "800 443 4123",
    "address": "St Paul MN",
    "contact_person": "Chanel Bell",
    "website": "icsystem.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Jennifer Pradt (Lawyer)",
    "category": "Local Business",
    "email": "jennifer@jlpdefense.com",
    "phone": "952 697 0001",
    "address": "370 Selby Ave Suite 201 St Paul MN",
    "contact_person": "",
    "website": "jlpdefense.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Rock Bottom Exteriors",
    "category": "Local Business",
    "email": "roofingmaster1976@yahoo.com",
    "phone": "612 363 2520",
    "address": "100 Mound Ave Excelsior",
    "contact_person": "Justin Walker",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "The Right Staff",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "therightstaff.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Headed West",
    "category": "Local Business",
    "email": "theheadedwest@gmail.com",
    "phone": "",
    "address": "Denver, CO",
    "contact_person": "",
    "website": "theheadedwest.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Stem Cell Centers",
    "category": "Local Business",
    "email": "LyndsayB@StemCellCenters.com",
    "phone": "",
    "address": "Edina, MN",
    "contact_person": "Lyndsay Bertie",
    "website": "stemcellcenters.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Blue Cross Blue Shield",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Minnesota",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Ying Zhang Composer",
    "category": "Local Business",
    "email": "zhangying_eaglemusic@yahoo.com",
    "phone": "",
    "address": "Edina, MN",
    "contact_person": "",
    "website": "zhangyingmusic.com",
    "source": "GoodPipeline"
  },
  {
    "name": "KangerTech",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "KangerTech.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Holiday Station Stores",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Legal Shield",
    "category": "Local Business",
    "email": "jimduchon@msn.com",
    "phone": "952 212 4893",
    "address": "Minnetonka,",
    "contact_person": "Jim Duchon",
    "website": "jduchon.legalshieldassociate.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Jeremy Clinefelter Law Offices",
    "category": "Local Business",
    "email": "jeremy@donnellylaw.com",
    "phone": "507 434 9665",
    "address": "",
    "contact_person": "507 434 9665",
    "website": "donnellylaw.com",
    "source": "GoodPipeline"
  },
  {
    "name": "The Factory Bar and Grill",
    "category": "Local Business",
    "email": "",
    "phone": "763 535 700",
    "address": "4100 Vinewood Ln, Plymouth",
    "contact_person": "Andrew Ortis",
    "website": "esunshinefactory.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Physicians Diagnostic",
    "category": "Local Business",
    "email": "sonjaf@pdrclinics.com",
    "phone": "952 908 2729",
    "address": "Burnsville",
    "contact_person": "Sonja F.",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Job Store Staffing",
    "category": "Local Business",
    "email": "nicole@jobstorestaffing.com",
    "phone": "303 755 6449",
    "address": "Aurora Colorado",
    "contact_person": "Nicole Vargas",
    "website": "jobstorestaffing.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Spazio (pizza and Italian",
    "category": "Local Business",
    "email": "dine@spaziofl.com",
    "phone": "954 764 8191",
    "address": "239 Ft Lauderdale Beach blvd",
    "contact_person": "",
    "website": "spaziofl.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Escapology",
    "category": "Local Business",
    "email": "fortlauderdale@escapology.com",
    "phone": "954900 5463",
    "address": "Ft Lauderdale Beach",
    "contact_person": "",
    "website": "escapology.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Ace Tattoo and Piercing",
    "category": "Local Business",
    "email": "lukebalderloftis.lbl@gmail.com",
    "phone": "763 595 8484",
    "address": "",
    "contact_person": "Randy Culver",
    "website": "acetattoomn.com",
    "source": "GoodPipeline"
  },
  {
    "name": "AnyTime Fitness",
    "category": "Local Business",
    "email": "plymouth@anytimefitness.com",
    "phone": "763 432 2099",
    "address": "Plymouth, MN",
    "contact_person": "Jim Dalton",
    "website": "anytimefitness.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Park Nicollet",
    "category": "Local Business",
    "email": "",
    "phone": "952 993 3260",
    "address": "Park Nicollet Clinic - St Louis Park",
    "contact_person": "Nancy Reed",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Chase Automotive Repair Service",
    "category": "Local Business",
    "email": "danny@chaseautomotiverepair.com",
    "phone": "303 344 4670",
    "address": "15601 E 6th Ave Suite 60, Aurora CO",
    "contact_person": "Danny Price",
    "website": "chaseautomotiverepair.com",
    "source": "GoodPipeline"
  },
  {
    "name": "GinStrings Band",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Absolute Best Cleaning",
    "category": "Local Business",
    "email": "",
    "phone": "651 307 4591",
    "address": "",
    "contact_person": "Tammi McDonald",
    "website": "absolutebestcleaningcompany.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Raw Treasures",
    "category": "Local Business",
    "email": "rich@rawtreasures.com",
    "phone": "315 296 1325",
    "address": "",
    "contact_person": "Richard Williams",
    "website": "rawtreasures.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Schmitty's Tattoos",
    "category": "Local Business",
    "email": "",
    "phone": "651 653 1922",
    "address": "",
    "contact_person": "Celena Khron",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Restoral",
    "category": "Local Business",
    "email": "The Paver Doctor",
    "phone": "612 716 8376",
    "address": "",
    "contact_person": "Rob fuckin Johnson aka RJ",
    "website": "restoralmn.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Deluxe",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "deluxe.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Sunshine CarWash",
    "category": "Local Business",
    "email": "",
    "phone": "952 938 1035",
    "address": "Hopkins, MN",
    "contact_person": "homie",
    "website": "sunshinecarwashusa.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Sunblock Vapes",
    "category": "Local Business",
    "email": "contact@sunblockvapes.com",
    "phone": "218 485 1147",
    "address": "",
    "contact_person": "",
    "website": "sunblockvapes.com",
    "source": "GoodPipeline"
  },
  {
    "name": "La Lima",
    "category": "Local Business",
    "email": "",
    "phone": "612 252 8514",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Robert F. Foley (Lawyer",
    "category": "Local Business",
    "email": "",
    "phone": "612 341 9080",
    "address": "Wayzata Blvd",
    "contact_person": "",
    "website": "geraldmiller.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Ratner Steel",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Roseville",
    "contact_person": "James Schwartz",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "musashi steel",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "Japan",
    "contact_person": "",
    "website": "MusashiCollection.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Mark D Kelly (Lawyer",
    "category": "Local Business",
    "email": "mark@markdkellylaw.com",
    "phone": "651 263 9095",
    "address": "1539 Grand Ave St Paul",
    "contact_person": "",
    "website": "markdkellylaw.com",
    "source": "GoodPipeline"
  },
  {
    "name": "MonsterMiniGold",
    "category": "Local Business",
    "email": "",
    "phone": "702 558 6556",
    "address": "Las Vegas, NV",
    "contact_person": "",
    "website": "monsterminigolf.com/kill",
    "source": "GoodPipeline"
  },
  {
    "name": "Ambivilant",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Karl Meier",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Remax Advantage Plus",
    "category": "Local Business",
    "email": "billEbert@MnRealEstateTeam.com",
    "phone": "651 276 9396",
    "address": "Eagan, MN",
    "contact_person": "William Ebert",
    "website": "BillEbert.Therealestateadvantage.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Huntington National",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Aneesa Oria",
    "website": "huntington.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Wyndham Hotels and Rewards",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "ProPlate",
    "category": "Local Business",
    "email": "",
    "phone": "763 427 0112",
    "address": "Anoka, MN",
    "contact_person": "Jakki Thompson",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "New Beginnings MN",
    "category": "Local Business",
    "email": "shirleen.roach@nbminnesota.com",
    "phone": "401 234 8121",
    "address": "University Ave",
    "contact_person": "Shirleen Roach",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Minneapolis Impound Lot",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "City Of Lakes",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "HerbalFlame",
    "category": "Local Business",
    "email": "info@herbalflame.com",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "HerbalFlame.com",
    "source": "GoodPipeline"
  },
  {
    "name": "GoodRx",
    "category": "Local Business",
    "email": "",
    "phone": "1 855 213 1275",
    "address": "",
    "contact_person": "",
    "website": "Pharmacy",
    "source": "GoodPipeline"
  },
  {
    "name": "Social Media Solutions",
    "category": "Local Business",
    "email": "greg@getsociallyupdate.com",
    "phone": "612 387 7809",
    "address": "",
    "contact_person": "Greg Bohnsack",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Targets Trading Pros",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Bob",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Twin Cities Home Rental",
    "category": "Local Business",
    "email": "marilyn@tchomerental.com",
    "phone": "6128224663",
    "address": "5200 34th Ave S Minneapolis",
    "contact_person": "Marilyn Cason",
    "website": "twincitieshomerental.com",
    "source": "GoodPipeline"
  },
  {
    "name": "quality chemical regents",
    "category": "Local Business",
    "email": "qualitychemicalreagents@gmail.com",
    "phone": "",
    "address": "",
    "contact_person": "erlich tests",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Medica",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Best Buy",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Volt",
    "category": "Local Business",
    "email": "ckarlson@volt.com",
    "phone": "651 468 3976",
    "address": "",
    "contact_person": "Chad Karlson",
    "website": "volt.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Song Tea and Poke",
    "category": "Local Business",
    "email": "",
    "phone": "763 347 489",
    "address": "10400 Baltimore St NE, Blaine",
    "contact_person": "",
    "website": "songteapoke.com",
    "source": "GoodPipeline"
  },
  {
    "name": "NEC Pebl Design",
    "category": "Local Business",
    "email": "",
    "phone": "763 544 8002",
    "address": "",
    "contact_person": "Dan Sontowski",
    "website": "naturalenvironmentscorp.com",
    "source": "GoodPipeline"
  },
  {
    "name": "Target",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Boiler Room Coffee",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "M Life Saphire",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "MGM Resorts",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Robert Half",
    "category": "Local Business",
    "email": "lizzie.nordlund@officeteam.com",
    "phone": "952 831 6020",
    "address": "Normandale Lake Blvd",
    "contact_person": "Lizzie Nordlund",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Chipotle",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Maria Tinoco",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "Microsoft",
    "category": "Local Business",
    "email": "",
    "phone": "",
    "address": "",
    "contact_person": "Marty",
    "website": "",
    "source": "GoodPipeline"
  },
  {
    "name": "@BickleRick",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "BickleRick",
    "website": "https://x.com/BickleRick",
    "source": "BickleRick Archive"
  },
  {
    "name": "@ar",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "ar",
    "website": "https://x.com/ar",
    "source": "BickleRick Archive"
  },
  {
    "name": "@bg",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "bg",
    "website": "https://x.com/bg",
    "source": "BickleRick Archive"
  },
  {
    "name": "@content",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "content",
    "website": "https://x.com/content",
    "source": "BickleRick Archive"
  },
  {
    "name": "@da",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "da",
    "website": "https://x.com/da",
    "source": "BickleRick Archive"
  },
  {
    "name": "@el",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "el",
    "website": "https://x.com/el",
    "source": "BickleRick Archive"
  },
  {
    "name": "@et",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "et",
    "website": "https://x.com/et",
    "source": "BickleRick Archive"
  },
  {
    "name": "@etc.clientlibs",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "etc.clientlibs",
    "website": "https://x.com/etc.clientlibs",
    "source": "BickleRick Archive"
  },
  {
    "name": "@fa",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "fa",
    "website": "https://x.com/fa",
    "source": "BickleRick Archive"
  },
  {
    "name": "@fi",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "fi",
    "website": "https://x.com/fi",
    "source": "BickleRick Archive"
  },
  {
    "name": "@fr",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "fr",
    "website": "https://x.com/fr",
    "source": "BickleRick Archive"
  },
  {
    "name": "@hy",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "hy",
    "website": "https://x.com/hy",
    "source": "BickleRick Archive"
  },
  {
    "name": "@id",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "id",
    "website": "https://x.com/id",
    "source": "BickleRick Archive"
  },
  {
    "name": "@ja",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "ja",
    "website": "https://x.com/ja",
    "source": "BickleRick Archive"
  },
  {
    "name": "@ko",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "ko",
    "website": "https://x.com/ko",
    "source": "BickleRick Archive"
  },
  {
    "name": "@lt",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "lt",
    "website": "https://x.com/lt",
    "source": "BickleRick Archive"
  },
  {
    "name": "@mt",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "mt",
    "website": "https://x.com/mt",
    "source": "BickleRick Archive"
  },
  {
    "name": "@pl",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "pl",
    "website": "https://x.com/pl",
    "source": "BickleRick Archive"
  },
  {
    "name": "@pt",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "pt",
    "website": "https://x.com/pt",
    "source": "BickleRick Archive"
  },
  {
    "name": "@sv",
    "category": "X-Legacy User",
    "email": "User-Finder-Experience@proton.me (Request Access)",
    "phone": "",
    "address": "",
    "contact_person": "sv",
    "website": "https://x.com/sv",
    "source": "BickleRick Archive"
  }
];
