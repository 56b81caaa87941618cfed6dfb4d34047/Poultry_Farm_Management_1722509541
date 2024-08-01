Vue.component('basic_login_form_1722509600', {
  template: `
    <main class="h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
      <div class="p-10 flex flex-col items-center justify-center w-full max-w-md backdrop-blur-lg bg-white/20 rounded-3xl shadow-lg border border-white/30">
        <div class="text-white w-full">
          <div class="w-full mb-5">
            <h3 class="text-3xl font-bold mb-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Log in to your account</h3>
            <div class="flex justify-center mb-5">
              <p class="mr-2 mt-1.5 text-pink-200">Don't have an account?</p>
              <button class="bg-pink-500/50 hover:bg-pink-400/50 active:bg-pink-600/50 text-white font-medium text-sm px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">Sign up</button>
            </div>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-5 w-full">
            <div>
              <label class="font-medium text-pink-200">Email Address</label>
              <input type="email" required class="w-full mt-2 px-4 py-3 text-white bg-white/10 outline-none border border-pink-300/30 focus:border-purple-400 rounded-lg placeholder-pink-200/70" placeholder="Enter your email" />
            </div>
            <div>
              <label class="font-medium text-pink-200">Password</label>
              <input type="password" required class="w-full mt-2 px-4 py-3 text-white bg-white/10 outline-none border border-pink-300/30 focus:border-purple-400 rounded-lg placeholder-pink-200/70" placeholder="Enter your password" />
            </div>
            <div>
              <p class="font-medium mb-2 text-pink-200">Select your preference:</p>
              <div class="flex items-center space-x-4 mb-2">
                <label class="flex items-center cursor-pointer">
                  <input type="radio" name="preference" class="mr-2 appearance-none w-4 h-4 border border-pink-300 rounded-full checked:bg-pink-500 checked:border-transparent focus:outline-none">
                  <span class="text-pink-200">Male</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="radio" name="preference" class="mr-2 appearance-none w-4 h-4 border border-pink-300 rounded-full checked:bg-pink-500 checked:border-transparent focus:outline-none">
                  <span class="text-pink-200">Female</span>
                </label>
              </div>
            </div>
            <div>
              <p class="font-medium mb-2 text-pink-200">Choose your interests:</p>
              <div class="space-y-2">
                <label class="flex items-center cursor-pointer">
                  <input type="checkbox" class="mr-2 appearance-none w-4 h-4 border border-pink-300 rounded checked:bg-pink-500 checked:border-transparent focus:outline-none">
                  <span class="text-pink-200">Interest 1</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="checkbox" class="mr-2 appearance-none w-4 h-4 border border-pink-300 rounded checked:bg-pink-500 checked:border-transparent focus:outline-none">
                  <span class="text-pink-200">Interest 2</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="checkbox" class="mr-2 appearance-none w-4 h-4 border border-pink-300 rounded checked:bg-pink-500 checked:border-transparent focus:outline-none">
                  <span class="text-pink-200">Interest 3</span>
                </label>
              </div>
            </div>
            <button class="w-full px-4 py-3 text-white font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">Sign in</button>
            <div class="text-center">
              <button class="bg-purple-500/50 hover:bg-purple-400/50 active:bg-purple-600/50 text-white font-medium text-sm p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">Forgot password?</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `,
  data() {
    return {
      expanded:false,
      data:null
    }
  },
})