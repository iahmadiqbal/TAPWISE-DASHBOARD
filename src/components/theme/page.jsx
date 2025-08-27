"use client";

import React, { useState } from "react";
import {
  FiUpload,
  FiImage,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiSmartphone,
  FiGlobe,
  FiMonitor,
} from "react-icons/fi";

const Theme = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [iconColor, setIconColor] = useState("#FFD701");
  const [textColor, setTextColor] = useState("#d58181");
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setCoverImage(ev.target?.result || null);
    reader.readAsDataURL(file);
  };

  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }));
  };

  const handleReset = () => {
    setCoverImage(null);
    setIconColor("#FFD701");
    setTextColor("#d58181");
    setSocialLinks({
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
      youtube: "",
    });
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* LEFT: Controls */}
      <div className="space-y-6">
        {/* Card: Cover Image */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-900">
              Cover Image
            </h2>
            <p className="text-sm text-gray-500">
              Upload a cover image (1100x700px recommended)
            </p>
          </div>
          <div className="p-4">
            <div className="rounded-lg border-2 border-dashed border-gray-200 p-6 text-center transition-colors">
              {coverImage ? (
                <div className="space-y-4">
                  <img
                    src={coverImage}
                    alt="Cover preview"
                    className="h-32 w-full rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("cover-upload")?.click()
                    }
                    className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors"
                  >
                    <FiUpload className="mr-2 h-4 w-4" />
                    Change Image
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <FiImage className="mx-auto h-12 w-12 text-gray-400" />
                  <div>
                    {/* ✅ Upload Cover Image: hover-tapwise-yellow applied */}
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("cover-upload")?.click()
                      }
                      className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover-tapwise-yellow"
                    >
                      Upload Cover Image
                    </button>
                    <p className="mt-2 text-xs text-gray-500">
                      PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              )}
              <input
                id="cover-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500"
          >
            Save Changes
          </button>
          {/* ✅ Reset button */}
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500"
          >
            Reset Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
