import {
    Home,
    About,
    Blog,
    ContactUs,
    Login_Signup,
    AdminPanel,
    Settings,
    Membership,
    Donation,
    Unauthorised,
    ErrorUi,
    MembershipPlans,
    MembershipPurchase,
    PrivacyPolicy,
    TermsAndConditions,
    RefundPolicy,
    Protected,
    LoginSignupReview,
    ForgetPassword,
    ForgetPasswordLayout,
    OtpVerification,
    ChangePassword,
    Layout,
    DonationForm,
    DonateMoney,
    CbblApply,
    CbblInvest
} from "./AllComponents";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "server-error",
                element: <ErrorUi />,
            },
            {
                path: "about-us",
                element: <About />,
            },
            /*{
                path: "/admin",
                element: <AdminLayout />,
            },
            {
                path: "/admin/login",
                element: <AdminLogin />,
            },
            {
                path: "qualified-items-list",
                element: <QualifiedItemsList />,
            },*/
            {
                path: "login-signup-review",
                element: <LoginSignupReview />,
            },
            {
                path: "forget-password",
                element: <ForgetPasswordLayout />,
                children: [
                    {
                        path: "",
                        element: <ForgetPassword />
                    },
                    {
                        path: "otp-verification",
                        element: <OtpVerification />
                    },
                    {
                        path: "change-password",
                        element: <ChangePassword />
                    }
                ]
            },
            /*{
                path: "products",
                element: <Products />,
            },
            {
                path: "/products/:slug",
                element: <ProductDetail />,
            },*/
            {
                path: "blogs",
                element: <Blog />,
            },
            {
                path: "contact-us",
                element: <ContactUs />,
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "terms-and-conditions",
                element: <TermsAndConditions />,
            },
            {
                path: "refund-policy",
                element: <RefundPolicy />,
            },
            {
                path: "cbbl-apply",
                element: <CbblApply />,
            },
            {
                path: "cbbl-invest",
                element: <CbblInvest />,
            },
            {
                path: "login-register",
                element: <Login_Signup />,
            },
            {
                path: "memberships",
                element: <Membership />,
                children: [
                    {
                        path: "",
                        element: <MembershipPlans />,
                    },
                    {
                        path: "purchase",
                        element: <MembershipPurchase />,
                    }
                ]
            },
            {
                path: "donate",
                element: <Donation />,
                children: [
                    {
                        path: "",
                        element: <DonationForm />
                    },
                    {
                        path: "money",
                        element: <DonateMoney />
                    },
                ]
            },
            {
                path: "donate/money",
                element: <Donation />,
            },
            {
                path: 'unauthorized',
                element: <Unauthorised />
            },
            {
                path: "panel",
                element: <Protected>
                    <AdminPanel />
                </Protected>,
                children: [
                    /*{
                        path: 'create',
                        element: <CreateProduct />
                    },*/
                    /*{
                        path: 'moderation',
                        element: <ModerateProducts />
                    },*/
                    /*{
                        path: 'moderation/edit',
                        element: <ProductDetails />
                    },*/
                    /*{
                        path: 'orders',
                        element: <Orders />
                    },*/
                    /*{
                        path: 'my-products',
                        element: <MyProducts />
                    },*/
                    /*{
                        path: 'my-products/:slug',
                        element: <ProductPage />
                    },*/
                    /*{
                        path: 'my-products/edit',
                        element: <ProductDetails />
                    },*/
                    /*{
                        path: 'favorites',
                        element: <Favorites />
                    },*/
                    /*{
                        path: 'Messages',
                        element: <Messages />
                    },*/
                    /*{
                        path: 'my-orders',
                        element: <MyOrders />
                    },*/
                    /*{
                        path: 'plans-and-features',
                        element: <Settings />
                    },*/
                    /*{
                        path: 'donations',
                        element: <Donations />
                    },*/
                    {
                        path: 'settings',
                        element: <Settings />
                    },
                ]
            },
            //       {
            //         path: "user-profile",
            //         element: <UserProfile />,
            //         children: [
            //           {
            //             path: "detail",
            //             element: <UserDetailPage />,
            //           },
            //           {
            //             path: "reviews",
            //             element: <UserReviewsPage />,
            //           },
            //           {
            //             path: "updatepassword",
            //             element: <PasswordUpatePage />,
            //           },
            //         ],
            //       },
            //       {
            //         path: "search",
            //         element: <CompanySearch />,
            //       },
            //       {
            //         path: "blogs",
            //         element: <BlogsPage />,
            //       },
            //       {
            //         path: "blog/:id",
            //         element: <BlogDetailPage />,
            //       },
            //       {
            //         path: "listing/:id",
            //         element: <ListingDetailPage />,
            //       },
        ],
    },
    // {
    //     path: "/sign-in",
    //     element: (
    //         <PrivateRoutes>
    //             <Signin />
    //         </PrivateRoutes>
    //     ),
    // },
    // {
    //     path: "/sign-up",
    //     element: <Signup />,
    // },
];

export default routes;
