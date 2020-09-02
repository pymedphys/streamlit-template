# Copyright (C) 2020 Darcy Mason, Simon Biggs, Matthew Jennings

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#     http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


import re

import streamlit as st

import pydicom


class WrongFileType(ValueError):
    pass


"""
# DICOM Header Viewer with Filter

This is a small example of the power of the `streamlit` library.

## Uploading a DICOM file

Begin by uploading a DICOM file
"""

dicom_bytes = st.file_uploader("Upload DICOM file")

if not dicom_bytes:
    raise st.stop()  

try:
    dicom_header = pydicom.read_file(dicom_bytes, force=True, stop_before_pixels=True)
except:
    st.write(WrongFileType("Does not appear to be a DICOM file"))
    raise st.stop()

"""
## Filtering and Viewing the DICOM header
"""

filter_string = st.text_input("Filter headers by typing here")

view = dicom_header.__repr__().split("\n")
filtered = [item for item in view if re.search(filter_string, item)]

raw = "\n".join(filtered)
f"""
```
{raw}
```
"""