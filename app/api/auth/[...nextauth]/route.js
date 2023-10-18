import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"




const Providers = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
        
    }),
  ],
  callbacks:{
    async session({session}){
        try {
             await User.findOne({
               email: session.user.email,
             });
           
             return session;
        } catch (error) {
            console.log("❤❤❤❤❤❤💛",error)
            
        }
  },
  
  async signIn({profile}){
    try {
        await ConnectDb()
        const userExists=await User.findOne({email:profile.email})
        if(!userExists){
            await User.create({
                email:profile.email,
                username:profile.name,
                image:profile.image
            })
        }
        console.log("sign In success")
        return true
    } catch (error) {
        console.log("signIn error",error)
        
    }
  }
  }
});


export {Providers as POST,Providers as GET}