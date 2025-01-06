// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


// model for Data Post card object:
import { DataPost } from 'src/dataPostInterface'







export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataPost[]>
) {

        let data:DataPost[] =
                [{
                        id: 1,
                        image: '/Media/business.jpg',
                        location: "Corn Exchange, Whitney, Oxfordshire",
                        price: 0,
                        alt: 'image description',
                        title: 'Overview of UK Internet Providers',
                        descriptionShort: 'The UK has a competitive internet service market with numerous providers offering a variety of broadband packages. Major players include BT, Sky, Virgin Media, TalkTalk, and EE, alongside smaller providers like Plusnet, Vodafone, and Hyperoptic. Customers can choose between fiber, ADSL, and mobile broadband, depending on their location and needs.',
                        descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. Proin pellentesque iaculis condimentum. \n\nDonec ut ipsum ex. Mauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. Morbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n\nQuisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. Nulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. Nulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commodo eget dui. Ut id sollicitudin augue. Donec pellentesque turpis in rutrum consectetur. Mauris dui mauris, egestas id pulvinar et, facilisis et ligula.',
                        topic: 'Upgrading',
                        user: 'Mary Jo Noah',
                        date: '27 June 2023',
                        time: '16:00',
                }, {
                        id: 2,
                        image: '/Media/new-site.jpg',
                        location: "Corn Exchange, Whitney, Oxfordshire",
                        price: 0,
                        alt: 'image description',
                        title: 'Types of Broadband Connections ',
                        descriptionShort: 'UK internet providers offer different types of connections. ADSL uses traditional phone lines and is widely available, though speeds can be limited. Fiber broadband provides much faster internet, with speeds up to 1Gbps in some areas. Mobile broadband uses 4G or 5G networks and is ideal for those who need internet on the go.',
                        descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. Proin pellentesque iaculis condimentum. Donec ut ipsum ex. \n\nMauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. Morbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. \n\nNulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. Nulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commo.',
                        topic: 'New Lanuches',
                        user: 'Gillian Heath',
                        date: '19 Sep 2023',
                        time: '14:00',
                }, {
                        id: 3,
                        image: '/Media/Image.jpg',
                        alt: 'image description',
                        location: "Corn Exchange, Whitney, Oxfordshire",
                        price: 0,
                        title: 'Speeds and Coverage',
                        descriptionShort: 'Internet speeds in the UK vary greatly depending on the provider and location. Urban areas tend to have faster connections, with fiber widely available. Rural areas, however, often suffer from slower speeds and limited options. The government has been pushing for nationwide gigabit-capable broadband to improve coverage across the country.',
                        descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. \n\nProin pellentesque iaculis condimentum. Donec ut ipsum ex. Mauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. Morbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. Nulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. \n\nNulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commodo eget dui. Ut id sollicitudin augue. Donec pellentesque turpis in rutrum consectetur. Mauris dui mauris, egestas id pulvinar et, facilisis et ligula.',
                        topic: 'Relational Database',
                        user: 'Wendy Tuesday',
                        date: '01 Nov 2023',
                        time: '13:00',
                },
                {
                        id: 4,
                        image: '/Media/surfer.jpg',
                        location: "Corn Exchange, Whitney, Oxfordshire",
                        price: 0,
                        alt: 'image description',
                        title: ' Popular Providers',
                        descriptionShort: 'BT is 13 the UK’s largest broadband provider, offering both ADSL and fiber options. Virgin Media is known for its ultrafast speeds but has more limited coverage. Sky and TalkTalk offer affordable packages, often bundled with TV services. Hyperoptic and Community Fibre specialize in ultrafast fiber connections in select areas.',
                        descriptionFull: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. Proin pellentesque iaculis condimentum. \n\nDonec ut ipsum ex. Mauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. Morbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n\nQuisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. Nulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. Nulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commodo eget dui. Ut id sollicitudin augue. Donec pellentesque turpis in rutrum consectetur. Mauris dui mauris, egestas id pulvinar et, facilisis et ligula.",
                        topic: 'Sports Section',
                        user: 'Duff Keeley',
                        date: '30 Nov 2023',
                        time: '10:00',
                },
                {
                        id: 5,
                        image: '/Media/chicken.jpg',
                        location: "Corn Exchange, Whitney, Oxfordshire",
                        price: 0,
                        alt: 'image description',
                        title: 'Mobile Broadband and 5G',
                        descriptionShort: 'With the rise of 5G technology, mobile broadband has become a viable alternative for home internet. Providers like EE, Three, Vodafone, and O2 offer competitive mobile data packages. For people in rural areas with poor fixed-line connections, 5G home broadband can provide a faster and more reliable option.',
                        descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. Proin pellentesque iaculis condimentum. Donec ut ipsum ex. Mauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. \n\nMorbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n\nQuisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. Nulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. Nulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commodo eget dui. Ut id sollicitudin augue. Donec pellentesque turpis in rutrum consectetur. Mauris dui mauris, egestas id pulvinar et, facilisis et ligula.',
                        topic: 'Multi Tasking',
                        user: 'Lorna Cassidy',
                        date: '15 Dec 2023',
                        time: '09:00',
                }]

  res.status(200).json(data)
}
