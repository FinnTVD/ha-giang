const GET_META_HOME = `
{
  page(id: "cG9zdDoyMQ==") {
    homeHG{
      meta{
        metaTitle
        metaDescription
      }
    }
    featuredImage{
      node{
        sourceUrl
        altText
        title
      }
    }
  }
}
`

const GET_DATA_HOME = `
{
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
      section1{
				subTitle
        title
        heading
        imageLeftUp{
          sourceUrl
          altText
          title
        }
        imageLeftDown{
          sourceUrl
          altText
          title
        }
        imageRightUp{
          sourceUrl
          altText
          title
        }
        imageRightDown{
          sourceUrl
          altText
          title
        }
        listInfo{
        	icon{
            sourceUrl
            altText
            title
          }
          title
          description
        }
        slidesVideo{
          linkVideo{
            url
          }
        }
      }
      section2{
        subTitle
        title
        map{
          sourceUrl
          altText
          title
        }
        listTitle{
          title
        }
        description
      }
      section3{
        subtitle
        title
      }
      section4{
        subtitle
        title
        listGallery{
          thumnail{
            sourceUrl
            altText
            title
          }
          category
          slidesImage{
            sourceUrl
            altText
            title
            
          }
        }
      }
      section5{
        subtitle
        title
        listFeedback{
          name
          rate
          description
        }
        listPartner{
          button{
            sourceUrl
            altText
            title
          }
          linkPartner{
            url
          }
        }
      }
      section6{
        subTitle
        title
        listCategory{
          category
          listAddress{
            title
            description
            image{
              sourceUrl
              altText
              title
            	}
            groupSize
            transport
            tripCompleted
            joinWithUs{
              url
            }
            callUs
          }
          listPeople{
            avatar{
              sourceUrl
              altText
              title
            }
            name
            job
            experience
            description
          }
        }
      }
      section7{
        subtitle
        title
        twelveMonthsOfTheYear{
          image{
            sourceUrl
            altText
            title
          }
          slogan
          averageTemperature
          averageRainfall
        }
      }
      section8{
        subtitle
        title
        listCategory{
          category
          description
          listInfo{
            heading
            description
          }
        }
      }
    }
  }
  allTourHG {
    nodes {
      title
      slug
      featuredImage {
        node {
          sourceUrl
          altText
          title
        }
      }
      tourHaGiangDetail {
        price {
          selfDriving
          localDriver
          pickUp{
          province
          listAddress{
            address
          }
        }
        droff{
          province
          listAddress{
            address
          }
        }
          longTimeTourDay
        }
        header {
          pickUpFrom
          groupSize
          transport
        }
      }
    }
  }
}
`

const GET_DATA_FOOTER = `
{
  page(id: "cG9zdDoyMQ==") {
    homeHG {
      footer{
        logo{
          sourceUrl
          altText
          title
        }
        background{
          sourceUrl
          altText
          title
        }
        contactUs{
          peopleContact{
            numberPhone
            name
          }
          email
          address
          global
        }
        cheersTour{
          nameTour
          linkTour{
            url
          }
        }
      }
    }
  }
  allTourHG {
    nodes {
      title
      slug
    }
  }
}
`

const GET_DATA_ABOUT_US=`{
page(id: "cG9zdDozOTE==") {
  aboutUs{
    banner{
      heading
      background {
        sourceUrl
      }
      textBackground {
        sourceUrl
      }
    }
    overview {
      contentBottom
      contentTop
      title
      topTitle
    } 
    valueTowards {
      title
      topTitle
      content {
        content
        title
        image {
          altText
          sourceUrl
        }
        icon {
          altText
          sourceUrl
        }
      }
    }
    textRun
    video {
      urlVideo
    }
  }
}}
`
export { GET_DATA_HOME, GET_META_HOME, GET_DATA_FOOTER, GET_DATA_ABOUT_US }
