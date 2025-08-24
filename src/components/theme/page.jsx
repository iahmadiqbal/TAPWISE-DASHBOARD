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
            <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
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
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <FiUpload className="mr-2 h-4 w-4" />
                    Change Image
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <FiImage className="mx-auto h-12 w-12 text-gray-400" />
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("cover-upload")?.click()
                      }
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
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

        {/* Card: Color Customization */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-900">
              Color Customization
            </h2>
          </div>
          <div className="space-y-4 p-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="icon-color"
                  className="text-sm font-medium text-gray-900"
                >
                  Icon Color
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    id="icon-color"
                    type="color"
                    value={iconColor}
                    onChange={(e) => setIconColor(e.target.value)}
                    className="h-10 w-12 cursor-pointer rounded border border-gray-300"
                  />
                  <input
                    type="text"
                    value={iconColor}
                    onChange={(e) => setIconColor(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400"
                    placeholder="#FFD701"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="text-color"
                  className="text-sm font-medium text-gray-900"
                >
                  Text Color
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    id="text-color"
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="h-10 w-12 cursor-pointer rounded border border-gray-300"
                  />
                  <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400"
                    placeholder="#d58181"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card: Social Links */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-900">
              Social Media Links
            </h2>
          </div>
          <div className="space-y-3 p-4">
            {[
              { platform: "facebook", label: "Facebook", Icon: FiFacebook },
              { platform: "twitter", label: "Twitter", Icon: FiTwitter },
              { platform: "instagram", label: "Instagram", Icon: FiInstagram },
              { platform: "linkedin", label: "LinkedIn", Icon: FiLinkedin },
              { platform: "youtube", label: "YouTube", Icon: FiYoutube },
            ].map(({ platform, label, Icon }) => (
              <div key={platform} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-gray-500" />
                <input
                  type="url"
                  placeholder={`${label} URL`}
                  value={socialLinks[platform]}
                  onChange={(e) =>
                    handleSocialLinkChange(platform, e.target.value)
                  }
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Card: App & Web Links */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-900">
              App & Web Links
            </h2>
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center gap-3">
              <FiSmartphone className="h-5 w-5 text-gray-500" />
              <input
                type="url"
                placeholder="Play Store Link"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400"
              />
            </div>
            <div className="flex items-center gap-3">
              <FiMonitor className="h-5 w-5 text-gray-500" />
              <input
                type="url"
                placeholder="App Store Link"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400"
              />
            </div>
            <div className="flex items-center gap-3">
              <FiGlobe className="h-5 w-5 text-gray-500" />
              <input
                type="url"
                placeholder="Website URL"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400"
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
          <button
            type="button"
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            onClick={handleReset}
          >
            Reset Changes
          </button>
        </div>
      </div>

      {/* RIGHT: Preview */}
      <div className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-900">
              NFC Card Preview
            </h2>
            <p className="text-sm text-gray-500">
              Real-time preview of your NFC card
            </p>
          </div>
          <div className="p-4">
            <div className="space-y-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 p-6">
              {/* Cover */}
              <div className="h-40 w-full overflow-hidden rounded-lg bg-gray-300">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Cover"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gray-500">
                    <FiImage className="h-12 w-12" />
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="space-y-2 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gray-400" />
                <h3 className="font-bold" style={{ color: textColor }}>
                  John Doe
                </h3>
                <p className="text-sm" style={{ color: textColor }}>
                  CEO, Tech Company
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                {[
                  FiFacebook,
                  FiTwitter,
                  FiInstagram,
                  FiLinkedin,
                  FiYoutube,
                ].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: iconColor }}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full rounded-lg px-4 py-2 text-sm font-semibold"
                  style={{ backgroundColor: iconColor, color: textColor }}
                >
                  Visit Website
                </button>
                <button
                  type="button"
                  className="w-full rounded-lg border px-4 py-2 text-sm font-semibold"
                  style={{ borderColor: iconColor, color: textColor }}
                >
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
