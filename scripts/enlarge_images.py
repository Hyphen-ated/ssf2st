# this tool finds the grey cross on each image and adds empty vertical space to the bottom so the cross is centered
import png
import pprint
import os
cross_color = [127,127,127,255]
cross_color2 = [126,126,126,255]

def is_grey(pixel):
    return (pixel[0] == 126 or pixel[0] == 127) \
       and (pixel[1] == 126 or pixel[1] == 127) \
       and (pixel[2] == 126 or pixel[2] == 127) \
       and (pixel[3] == 255)

def process_cross(root, filename):
    reader = png.Reader(filename = filename)
    w,h,_,metadata = reader.read()

    image = png.Reader(filename = filename).asDirect()
    pixels = [list(row) for row in image[2]]

    cross_y = -1
    cur_y = 0
    for row in pixels:
        greycount = 0
        for i in range(0,len(row),4):
            pixel = row[i:i+4]
            if is_grey(pixel):
                greycount += 1
        if greycount >= 9:
            cross_y = cur_y
        cur_y += 1
    y_size = len(pixels)
    x_size = int(len(pixels[0]) / 4)
    if cross_y == -1:
        print("no cross found: " + filename)
    elif cross_y < y_size / 2:
        print("high cross: " + filename + ", " + str(cross_y) + "," + str(y_size))
    else:
        target_height = cross_y * 2 + 1
        extra_rows = target_height - y_size
        blankrow = [255,255,255,0] * x_size
        for i in range(extra_rows):
            pixels.append(blankrow)
        outfname = 'test/test2/' + filename
        os.makedirs('test/test2/' + root, exist_ok=True)
        output = open(outfname, 'wb')
        writer = png.Writer(x_size, target_height, alpha=True,bitdepth=8,greyscale=False)
        writer.write(output, pixels)
        output.close()

    #pprint.pprint(image)
    #print(pixels)
    #print(len(pixels))
    #pprint.pprint(metadata)
    #pprint.pprintprint(pixels)

#filename = "../st/balrog/0012-far_standing_jab/stfarjab1.png"
for root, dirs, files in os.walk("../st/"):
    for file in files:
        if file.endswith(".png"):
            filename = root + '/' + file
            print (filename)
            process_cross(root,filename)
            #print (filename + ", cross_y = " + str(find_cross(filename)))
    #print(files)