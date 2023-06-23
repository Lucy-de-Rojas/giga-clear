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
                        image: '/Media/Image.jpg',
                        alt: 'image description',
                        title: 'Upgrading your remote business - Talk',
                        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi sapien, malesuada a ex et, lobortis lacinia enim. In hac habitasse platea dictumst. Aliquam eu auctor mauris. Nunc dui erat, venenatis a maximus consectetur, lobortis iaculis leo. Curabitur et vestibulum elit. Aenean egestas sem velit, eget tempus sapien consectetur sed. Aenean tincidunt ante nibh, sit amet faucibus urna elementum ut. Praesent mollis accumsan ante eu consectetur. Praesent viverra tortor ac risus hendrerit lobortis.',
                        descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. Proin pellentesque iaculis condimentum. \n\nDonec ut ipsum ex. Mauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. Morbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n\nQuisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. Nulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. Nulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commodo eget dui. Ut id sollicitudin augue. Donec pellentesque turpis in rutrum consectetur. Mauris dui mauris, egestas id pulvinar et, facilisis et ligula.',
                        topic: 'Upgrading',
                        user: 'Mary Jo Noah',
                        date: '27 June 2023',
                        time: '16:00',
                }, {
                        id: 2,
                        image: '/Media/Image.jpg',
                        alt: 'image description',
                        title: 'Gigiaclear launched brand new website',
                        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi sapien, malesuada a ex et, lobortis lacinia enim. In hac habitasse platea dictumst. Aliquam eu auctor mauris. Nunc dui erat, venenatis a maximus consectetur, lobortis iaculis leo. Curabitur et vestibulum elit. Aenean egestas sem velit, eget tempus sapien consectetur sed. Aenean tincidunt ante nibh, sit amet faucibus urna elementum ut. Praesent mollis accumsan ante eu consectetur. Praesent viverra tortor ac risus.',
                        descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. Proin pellentesque iaculis condimentum. Donec ut ipsum ex. \n\nMauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. Morbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. \n\nNulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. Nulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commo.',
                        topic: 'New Lanuches',
                        user: 'Gillian Heath',
                        date: '19 September 2023',
                        time: '14:00',
                }, {
                        id: 3,
                        image: '/Media/Image.jpg',
                        alt: 'image description',
                        title: 'Two WIFI routers got married. The reception was amazing!',
                        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi sapien, malesuada a ex et, lobortis lacinia enim. In hac habitasse platea dictumst. Aliquam eu auctor mauris. Nunc dui erat, venenatis a maximus consectetur, lobortis iaculis leo. Curabitur et vestibulum elit. Aenean egestas sem velit, eget tempus sapien consectetur sed. Aenean tincidunt ante nibh, sit amet faucibus urna elementum ut. Praesent mollis accumsan ante eu consectetur. Praesent viverra tortor ac risus hendrerit lobortis.',
                        descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. \n\nProin pellentesque iaculis condimentum. Donec ut ipsum ex. Mauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. Morbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. Nulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. \n\nNulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commodo eget dui. Ut id sollicitudin augue. Donec pellentesque turpis in rutrum consectetur. Mauris dui mauris, egestas id pulvinar et, facilisis et ligula.',
                        topic: 'Relational Database',
                        user: 'Wendy Tuesday',
                        date: '01 November 2023',
                        time: '13:00',
                },
                {
                        id: 4,
                        image: '/Media/Image.jpg',
                        alt: 'image description',
                        title: 'Of course I\'m athletic, I surf internet every day',
                        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi sapien, malesuada a ex et, lobortis lacinia enim. In hac habitasse platea dictumst. Aliquam eu auctor mauris. Nunc dui erat, venenatis a maximus consectetur, lobortis iaculis leo. Curabitur et vestibulum elit. Aenean egestas sem velit, eget tempus sapien consectetur sed.',
                        descriptionFull: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. Proin pellentesque iaculis condimentum. \n\nDonec ut ipsum ex. Mauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. Morbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n\nQuisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. Nulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. Nulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commodo eget dui. Ut id sollicitudin augue. Donec pellentesque turpis in rutrum consectetur. Mauris dui mauris, egestas id pulvinar et, facilisis et ligula.",
                        topic: 'Sports Section',
                        user: 'Duff Keeley',
                        date: '30 November 2023',
                        time: '10:00',
                },
                {
                        id: 5,
                        image: '/Media/Image.jpg',
                        alt: 'image description',
                        title: 'Why did chicken cross the internet? To get to the other site.',
                        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi sapien, malesuada a ex et, lobortis lacinia enim. In hac habitasse platea dictumst. Aliquam eu auctor mauris. Nunc dui erat, venenatis a maximus consectetur, lobortis iaculis leo. Curabitur et vestibulum elit. Aenean egestas sem velit, eget tempus sapien consectetur sed. Aenean tincidunt ante nibh, sit amet faucibus urna elementum ut. Praesent mollis accumsan ante eu consectetur. Praesent viverra tortor ac risus hendrerit lobortis.',
                        descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur viverra nisl, vel dapibus ante auctor vel. Proin posuere ipsum mauris, sit amet mollis ipsum sodales at. Nulla ut lorem vel sem imperdiet varius nec efficitur metus. Morbi euismod varius pellentesque. Mauris id tellus nisi. Proin pellentesque iaculis condimentum. Donec ut ipsum ex. Mauris quis mauris non est lacinia ultricies in quis quam. Donec neque velit, facilisis ut consectetur sed, gravida at sapien. \n\nMorbi non odio commodo, interdum purus non, tincidunt diam. Vestibulum urna ex, maximus nec ligula non, tincidunt gravida leo. Morbi cursus, felis at tempor vestibulum, magna lorem scelerisque tortor, eget ultrices justo erat sed libero. Sed placerat tristique tortor sit amet vestibulum. Aliquam cursus interdum nibh vel convallis. Etiam pharetra metus a massa ultrices pellentesque. Nunc non arcu arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n\nQuisque vulputate lectus sit amet magna imperdiet, ac facilisis justo porta. Nulla facilisi. Nulla at tincidunt dui. Integer neque tortor, porta ac malesuada placerat, euismod ut nisi. Nulla luctus bibendum felis, eu ultrices diam tincidunt aliquet. Curabitur cursus lacinia porta. Pellentesque ac placerat nunc, in tincidunt risus. Mauris velit est, gravida in ultricies ut, commodo eget dui. Ut id sollicitudin augue. Donec pellentesque turpis in rutrum consectetur. Mauris dui mauris, egestas id pulvinar et, facilisis et ligula.',
                        topic: 'Multi Tasking',
                        user: 'Lorna Cassidy',
                        date: '15 December 2023',
                        time: '09:00',
                }]

  res.status(200).json(data)
}
