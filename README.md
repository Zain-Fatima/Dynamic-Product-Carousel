**Thought Process:**        
I reviewed the official three.js documentation to understand the capabilities of the library, focusing on the GLTFLoader, camera setup, and scene management. I also took help from chatgpt for getting information on three.js becauseof time constraints also understood this topic raycasting in detail because it was confusing for me when I read it on the three.js documentation.
And I also explored various online examples and tutorials, such as:
Three.js documentation examples (Three.js Examples)
Community tutorials on building carousels and using GLTF models effectively for better understandability.
I grasped the main topics from three.js.
And for this task, I used the iterative approach where I first prcticed with the deometrical cubes then I built the caraousels incrementally starting with loading models, adding navigation
and finally implementing user interaction.
I organized the code into functions to keep it understandable, better readability and maintability such as loadModel, visibility etc
I also added simple navigation logic and event handlers.  
**Challenges:**  
Initially, some models did not load correctly due to incorrect paths or formats. I used console logs to debug the loading process and ensured that the file paths were correct.
The issues I encountered were in their positions. the models were not positioned properly. they were coliding with each other. for this issue, i researched and googled alot and found the solution on three.js forum community and was able to built the scaling function properly to scale models uniformly, ensuring a consistent visual size across the carousel.
Implementing mouse hover effects and click events proved challenging. I used raycasting to detect mouse interactions and adjusted the code to make the models clickable.
I first used the typical js code for the pop-up and mouse hover effects but then after googling, i came to know that we can't use this because they don't work on three.js in 3d models.
After so much researching, i was not able to find its solution on internet. After spending and wasting so much timing on it i got frustrated and i decided to take the help from the chatgpt and chatgpt was also not able to provide the solution. I wasted the full whole day and night on this but still was not able to encounter it.
I wil be needing your insights on it. It's still not as good as I wanted it to be but I gained valuable experience in using Three.js for 3D graphics and improved my problem-solving skills by navigating various challenges.
I also identified potential enhancements, such as adding animation effects during transitions between models and incorporating more interactive elements, which could improve user engagement.  
**Resources:**  
  Three.js Documentation  
  Three.js Examples  
  Chatgpt  
  Stackover flow  
  Reddit  
  Sketchfab  
  poly haven  
  Youtube  
