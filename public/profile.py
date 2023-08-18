from PIL import Image, ImageDraw
import random

# Set image dimensions
image_size = (500, 500)
block_size = 10

for i in range(500):
    # Generate image 
    im = Image.new('RGB', image_size)
    draw = ImageDraw.Draw(im)

    # Draw random color blocks
    for y in range(0, image_size[1], block_size):
        for x in range(0, image_size[0], block_size):
            # Get random color
            red = random.randint(0, 255) 
            green = random.randint(0, 255)
            blue = random.randint(0, 255)
            color = (red, green, blue)
            
            # Draw block 
            draw.rectangle([x, y, x + block_size, y + block_size], fill=color)
            
    # Save image       
    im.save(f'rand_pic/random_image_{i}.png')