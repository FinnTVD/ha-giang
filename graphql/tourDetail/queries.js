const GET_DETAIL_TOUR = `query ($slug: ID!){
  tourHG(id: $slug, idType: SLUG) {
    title
    featuredImage {
      node {
        sourceUrl
        altText
        title
      }
    }
    tourHaGiangDetail {
      metaSeo {
        metaTitle
        metaDescription
      }
      header {
        subtitle
        title
        timeTour
        highlight {
          title
        }
        departure
        pickUpFrom
        groupSize
        transport
      }
      section1 {
        subtitle
        title
        backgroundMap {
          sourceUrl
          altText
          title
        }
        listDay {
          distanceLength
          router {
            sourceUrl
            altText
            title
          }
          listProvince {
            province
          }
        }
        videoTour {
          url
        }
      }
      tripDetails {
        subtitle
        title
        listDetail {
          step
          heading
          listCheckin {
            category
            content
            slogan
            gallery {
              sourceUrl
              altText
              title
            }
          }
        }
      }
      faq {
        subtitle
        title
        listFaq {
          question
          answer
        }
      }
    }
  }
  allTourHG{
    nodes{
      title
      slug
      featuredImage{
        node{
          sourceUrl
          altText
          title
        }
      }
      tourHaGiangDetail{
        header{
          pickUpFrom
          groupSize
          transport
        }
      }
    }
  }
  page(id: "cG9zdDoyMQ==") {
    homeHG {
      header{
				logo{
          sourceUrl
          title
          altText
        }
        background{
          sourceUrl
          altText
          title
        }
        slogan
        phoneNumber
        facebook{
          url
        }
        youtube{
          url
        }
        vietnamCheersHostel{
          url
        }
      }
    }
  }
}`

export { GET_DETAIL_TOUR }
