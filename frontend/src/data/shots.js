
const shot = {
    ts1: 'https://cdn.dribbble.com/users/517584/screenshots/15858301/media/58e765c040fb7f9dec44d21f143cf9e4.png?compress=1&resize=1200x900&vertical=top',
    ts2: 'https://cdn.dribbble.com/users/517584/screenshots/16867110/media/8d045d7b556b599bab6550518db05ab9.png?compress=1&resize=1200x900&vertical=top',
    ts3: 'https://cdn.dribbble.com/users/517584/screenshots/16667865/media/aed784180547f4b2e51778a9a24119a8.png?compress=1&resize=1200x900&vertical=top',
    ts4: 'https://cdn.dribbble.com/users/3609510/screenshots/18109734/media/7e3b487abc3ee688b81d6528ec2c3f5a.png?compress=1&resize=800x600&vertical=top',
    ts5: 'https://cdn.dribbble.com/users/1997192/screenshots/16922863/media/8b7bbcfe22a4cc3795b9ebf9115b43a1.png?compress=1&resize=1200x900&vertical=top',
    ts6: 'https://cdn.dribbble.com/users/2564256/screenshots/16375403/media/d1c537794bc4ea7789b1887b080d92bd.png?compress=1&resize=700x525&vertical=top',
}

const profiles = {
    pr1: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg',
    pr2: 'https://www.adobe.com/express/feature/image/resize/media_127a9a19d5ab16289daf2543126ce3cfe5e5290fe.jpeg?width=400&format=jpeg&optimize=medium',
    pr3: 'https://i.pinimg.com/736x/f0/98/c9/f098c9ace101131c6f4b865fe06a878f.jpg',
    pr4: 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000',
    pr5: 'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=2000',
    pr6: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpMlcgNRldPhvxO6PQatDPekVroEPNMWK6PZuwpQBfN84QAKtv8liXZ8eKICnGMSr80s&usqp=CAU',
    pr7: 'https://64.media.tumblr.com/6c20f5206af7ad37541b8ae0e74e232c/tumblr_pwmv0bjG2U1vewxszo1_1280.jpg',
    pr8: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROqifJBuGM-Pk6B51YQq4kbyZadB7hdyN7A&usqp=CAU',
    pr9: 'https://www.euroleaguebasketball.net/images/logo-default.png',
    pr10: 'https://s27.q4cdn.com/708721433/files/images/new-logos/image-(10).png'
}
export const SHOTS = [
    {
        thumbnail: 'https://cdn.dribbble.com/userupload/2643757/file/original-70d476567008046f7db738049d265025.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=2400x1800',
        user: 'Kernell Lingua',
        likes: '5.8k',
        views: '23.3k',
        type: 'TEAM',
        city: 'Cape Town, South Africa',
        title: 'Open Source Interface',
        bio: 'UI UX Designer - Taking New Projects',
        category: 'Mobile',
        video: false,
        profile_picture: 'https://cdn.dribbble.com/users/6252196/avatars/normal/37273ca2df8a8a4e6cd0cd1379f58f65.png?1639455576',
        posts: {
            thumbnail: 'https://cdn.dribbble.com/users/4189231/screenshots/17457168/media/164f2511fdb53b682535e47b542862fb.png?compress=1&resize=1200x900&vertical=top',
            caption: 'Durban sunsets are the best.',
            post_shots: ['https://cdn.dribbble.com/users/4189231/screenshots/17457168/media/164f2511fdb53b682535e47b542862fb.png?compress=1&resize=1200x900&vertical=top', 'https://cdn.dribbble.com/users/4189231/screenshots/17457168/media/164f2511fdb53b682535e47b542862fb.png?compress=1&resize=1200x900&vertical=top', 'https://cdn.dribbble.com/users/4189231/screenshots/17413349/media/cf364b39ed9351af14d1d52a22902363.png?compress=1&resize=1200x900&vertical=top', 'https://cdn.dribbble.com/users/4189231/screenshots/17360566/media/bd675d379081b0c6fffce37c55e2061c.png?compress=1&resize=1200x900&vertical=top', 'https://cdn.dribbble.com/users/4189231/screenshots/17324947/media/f034f809fe781934363b3ae384461c4b.png?compress=1&resize=1200x900&vertical=top'],
        }
    },
    {
        thumbnail: 'https://cdn.dribbble.com/userupload/2642526/file/original-086e4b7dde778919d757ec5acd719adb.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=2400x1800',
        user: 'Implse',
        likes: '223',
        views: '455',
        type: 'PRO',
        city: 'New York City, United States',
        title: 'Developer experience: hero section',
        bio: 'Helping digital innovators to create a worthy web presence',
        category: 'Branding',
        video: false,
        profile_picture: profiles.pr1,
        posts: {
            thumbnail: shot.ts6,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts3, shot.ts6, shot.ts5],
        }
    },
    {
        thumbnail: 'https://cdn.dribbble.com/users/226242/screenshots/18113398/media/bb17355607150e18aff44af5220c1247.png?compress=1&resize=640x480&vertical=top',
        user: 'Sima Jen',
        likes: '1.3k',
        views: '3.3k',
        type: 'TEAM',
        city: 'Stellenbosch, South Africa',
        title: 'Film Camera',
        bio: 'Studio Lighting and Photography',
        category: 'Webdesign',
        video: false,
        profile_picture: profiles.pr2,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts1, shot.ts1],
        }
    },
    {
        thumbnail: 'https://cdn.dribbble.com/userupload/2644357/file/original-6f71b5938c94fe10f7cd0d118f097d62.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=2400x1800',
        user: 'Riley',
        likes: '2.2k',
        views: '9.3k',
        type: 'PRO',
        city: 'Berlin, Germany',
        title: 'Outdoot Camping',
        bio: 'Motion Graphics Designer | Animator',
        category: 'Branding',
        video: false,
        profile_picture: profiles.pr5,
        posts: {
            thumbnail: shot.ts5,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts5, shot.ts2, shot.ts4, shot.ts1],
        }
    },
    {
        thumbnail: 'https://cdn.dribbble.com/userupload/2619626/file/original-9ce34c74bbd71e28ea07c356315ef66c.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=2400x1800',
        user: 'ABSA Group',
        likes: '543',
        views: '1.1k',
        type: 'TEAM',
        city: 'London, United Kingdom',
        title: 'Payments Faster',
        bio: 'Financial Services - FinTech',
        category: 'Product Design',
        video: false,
        profile_picture: profiles.pr1,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts5, shot.ts2, shot.ts3, shot.ts1],
        }
    },
    {
        thumbnail: 'https://cdn.dribbble.com/userupload/2643315/file/original-2cfe74745f2255bbf8cc33aed1153e95.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=2400x1800',
        user: 'Elefide',
        likes: '433',
        views: '12.1k',
        type: 'TEAM',
        city: 'Cape Town, South Africa',
        title: 'Internal Analytics Web App',
        bio: 'IA MDD',
        category: 'Product Design',
        video: false,
        profile_picture: profiles.pr3,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts2, shot.ts1, shot.ts4, shot.ts2],
        }
    },
    {
        thumbnail: 'https://cdn.dribbble.com/users/174531/videos/300683/us_-_new_-_b_xlarge_preview.mp4',
        user: 'Square Space',
        likes: '732',
        views: '1.8k',
        type: 'AD',
        city: 'San Francisco, USA',
        title: 'Website Builder',
        bio: 'CLEAN WEBSITE BUILDER',
        category: 'ad',
        video: true,
        profile_picture: profiles.pr1,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts2, shot.ts1, shot.ts4, shot.ts2],
        }
    },
    {
        thumbnail: 'https://cdn.dribbble.com/users/4189231/screenshots/17324947/media/f034f809fe781934363b3ae384461c4b.png?compress=1&resize=1200x900&vertical=top',
        user: 'Alex',
        likes: '88',
        views: '656',
        type: 'TEAM',
        city: 'Cape Town, South Africa',
        title: 'Digital Banking',
        bio: 'Invest with us not now.',
        category: 'Product Design',
        video: false,
        profile_picture: profiles.pr7,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts2, shot.ts1, shot.ts4, shot.ts2],
        }
    },
    {
        thumbnail: shot.ts4,
        user: 'Victor Lofe',
        likes: '4.3k',
        views: '76.1k',
        type: 'TEAM',
        city: 'Dublin, Ireland',
        title: 'NC City Map',
        bio: 'The city that you Love.',
        category: 'Branding',
        video: false,
        profile_picture: profiles.pr5,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts2, shot.ts1, shot.ts4, shot.ts2],
        }
    },
    {
        thumbnail: shot.ts5,
        user: 'Mixins',
        likes: '2.1k',
        views: '5.5k',
        type: 'TEAM',
        city: 'Cancun, Mexico',
        title: 'Local Real Estate',
        bio: 'Professional Service Proven Results.',
        category: 'Branding',
        video: false,
        profile_picture: profiles.pr10,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts2, shot.ts1, shot.ts4, shot.ts2],
        }
    },
    {
        thumbnail: shot.ts1,
        user: 'ray',
        likes: '212',
        views: '2.2k',
        type: 'TEAM',
        city: 'Kyiv, Ukrain',
        title: 'Pay Payments',
        bio: 'FAST, RELIABLE PAYMENTS',
        category: 'Webdesign',
        video: false,
        profile_picture: profiles.pr8,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts2, shot.ts1, shot.ts4, shot.ts2],
        }
    },
    {
        thumbnail: shot.ts2,
        user: 'subdiit',
        likes: '723',
        views: '997',
        type: 'PRO',
        city: 'Warsaw, Poland',
        title: 'Subscription Software',
        bio: 'Integrate Subscriptions to your website.',
        category: 'Webdesign',
        video: false,
        profile_picture: profiles.pr3,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts2, shot.ts1, shot.ts4, shot.ts2],
        }
    },
    {
        thumbnail: 'https://cdn.dribbble.com/users/2146089/screenshots/16911118/media/4a66128a03f36787eb894f80daab8cec.png?compress=1&resize=1200x900&vertical=top',
        user: 'Peerr',
        likes: '983',
        views: '3.1k',
        type: 'TEAM',
        city: 'Barcelona, Spain',
        title: 'Peer to Peer App',
        bio: 'Seamless Payments with your family,friends and business partners.',
        category: 'Mobile',
        video: false,
        profile_picture: profiles.pr1,
        posts: {
            thumbnail: shot.ts1,
            caption: 'Durban sunsets are the best.',
            post_shots: [shot.ts2, shot.ts1, shot.ts4, shot.ts2],
        }
    }
]