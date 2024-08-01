Vue.component('basic_login_form_1722509600', {
  template: `
    <main class="h-7/12 flex items-center justify-center">
      <div class="p-10 flex flex-col items-center justify-center bg-white w-full max-w-md shadow-lg">
        <div class="text-black w-full">
          <div class="w-full mb-5">
            <h3 class="text-3xl font-bold mb-5 text-center">Log in to your account</h3>
            <div class="flex justify-center mb-5">
              <p class="mr-2 mt-1.5">Don't have an account?</p>
              <button class="bg-green-600 hover:bg-green-500 active:bg-green-600 text-white font-medium text-sm px-2 py-1 rounded-lg">Sign up</button>
            </div>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-5 w-full">
            <div>
              <label class="font-medium">Email</label>
              <input type="email" required class="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border border-gray-300 focus:border-purple-600 shadow-sm rounded-lg" />
            </div>
            <div>
              <label class="font-medium">Password</label>
              <input type="password" required class="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border border-gray-300 focus:border-purple-600 shadow-sm rounded-lg" />
            </div>
            <div>
              <p class="font-medium mb-2">Select your preference:</p>
              <div class="flex items-center space-x-4 mb-2">
                <label class="flex items-center">
                  <input type="radio" name="preference" class="mr-2">
                  <span>Male</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="preference" class="mr-2">
                  <span>Female</span>
                </label>
              </div>
            </div>
            <div>
              <p class="font-medium mb-2">Choose your interests:</p>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2">
                  <span>Interest 1</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2">
                  <span>Interest 2</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2">
                  <span>Interest 3</span>
                </label>
              </div>
            </div>
            <button class="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">Sign in</button>
            <div class="text-center">
              <button class="bg-red-500 hover:bg-red-400 active:bg-yellow-500 text-white font-medium text-sm p-3 rounded-lg">Forgot password?</button>
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