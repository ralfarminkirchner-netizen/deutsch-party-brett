import os
from rembg import remove

base_dir = "/Users/ralfkirchner/.gemini/antigravity/scratch/deutsch-party-brett/assets/img"
files = [
    ("steph_bild_1.jpg", "char_1_cutout.png"),
    ("steph_bild_2.jpg", "char_2_cutout.png"),
    ("steph_bild_3.jpg", "char_3_cutout.png")
]

for in_name, out_name in files:
    in_path = os.path.join(base_dir, in_name)
    out_path = os.path.join(base_dir, out_name)
    
    if os.path.exists(in_path) and os.path.getsize(in_path) > 0:
        with open(in_path, 'rb') as i:
            with open(out_path, 'wb') as o:
                input_data = i.read()
                output_data = remove(input_data)
                o.write(output_data)
        print(f"Processed {in_name} -> {out_name}")
    else:
        print(f"Skipped {in_name} (does not exist or 0 bytes)")
