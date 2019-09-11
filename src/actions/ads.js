export const SET_ADS = "SET_ADS"
export const ADD_ADS = "ADD_ADS"

export const loadAds = () => dispatch => {

  // Placeholder example data. To be replaced by actual data fetching.
  const ads = [
    {
      id: 1,
      title: "Apples",
      price: "320",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis egestas metus, eget egestas turpis. Nulla facilisi. Nam eu quam sit amet massa maximus lobortis. Quisque augue mauris, consequat sit amet diam ac, luctus sagittis eros. In et tellus ex. Nulla congue bibendum est ut fermentum. Aliquam vestibulum tristique sapien, sit amet tincidunt orci viverra at.",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_842,w_1500,x_0,y_158/f_auto,q_auto,w_1100/v1554998779/shape/mentalfloss/istock-184927564.jpg",
      sellerName: "Anton",
      sellerEmail: "anton@example.com",
      sellerPhone: "0123-456789",
    },
    {
      id: 2,
      title: "Banana",
      price: "59",
      description: "Fusce quam neque, sollicitudin et ultrices in, tincidunt suscipit velit. Cras non luctus justo. Nunc a lacinia erat. Aliquam erat volutpat. Integer bibendum dapibus iaculis. Integer hendrerit mauris vel ante gravida varius. Vivamus sollicitudin, nulla id hendrerit sollicitudin, tellus dui eleifend dui, non cursus enim urna id ex. Fusce id nulla at ligula sodales vulputate. Ut rutrum eleifend metus vel fermentum. Duis efficitur enim nisl, ac vulputate felis lobortis ac. Nulla pharetra erat viverra lorem eleifend, non lacinia ipsum maximus. In eget iaculis nunc. Sed sit amet tortor magna. Sed sed aliquam tellus, vitae feugiat quam.",
      picture: "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg",
      sellerName: "Bob",
      sellerEmail: "bob@example.com",
      sellerPhone: "0123-456798",
    },
    {
      id: 3,
      title: "Cherries",
      price: "599",
      description: "Donec in tortor ut lectus tincidunt hendrerit sed sit amet elit. Ut urna risus, lobortis ac imperdiet sed, viverra et dui. Aliquam erat volutpat. Duis tincidunt dolor ac diam lacinia, non ullamcorper velit condimentum. Aliquam blandit dictum quam, ac blandit sem rutrum eget. Phasellus vel leo nec dolor cursus accumsan et et lacus. Donec et augue ut tortor tincidunt eleifend. In vitae elit non enim fermentum vulputate porttitor vitae augue. Suspendisse a pretium nulla.",
      picture: "https://clearmedicine.com/wp-content/uploads/2018/07/cherries.jpg",
      sellerName: "Cindy",
      sellerEmail: "cindy@example.com",
      sellerPhone: "0123-456897",
    },
  ]

  const action = {
    type: SET_ADS,
    payload: ads
  }
  dispatch(action)
}

export const createAd = ad => dispatch => {
  const action = {
    type: ADD_ADS,
    payload: [ad]
  }
  dispatch(action)
}